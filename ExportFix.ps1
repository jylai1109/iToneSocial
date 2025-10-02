param (
    # Next.js build output directory
    [string]$buildRoot = "D:/work/Projects/iToneSocial/.next",

    # IIS deploy directory
    [string]$deployRoot = "D:/Web/EPMIS_React"
)

Write-Host "🔄 Starting Next.js export processing..." -ForegroundColor Cyan

# Disable Conda profile interference (only for this session, does not affect global settings)
$env:CONDA_SHLVL = ""
$env:CONDA_DEFAULT_ENV = ""
$env:CONDA_PROMPT_MODIFIER = ""

# Step 0: Ensure deploy directory exists
if (-not (Test-Path $deployRoot)) {
    Write-Host "📂 Creating deploy directory: $deployRoot" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $deployRoot | Out-Null
}

# Step 1: Clean old deploy contents
Write-Host "🧹 Cleaning old deploy contents..." -ForegroundColor Yellow
Get-ChildItem -Path $deployRoot -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Step 2: Copy app HTML/JS output
$appSource = Join-Path $buildRoot "server\app"
if (Test-Path $appSource) {
    Write-Host "📂 Copying App output: $appSource → $deployRoot" -ForegroundColor Cyan
    Copy-Item -Path $appSource\* -Destination $deployRoot -Recurse -Force
} else {
    Write-Host "⚠ App output not found: $appSource" -ForegroundColor Red
}

# Step 3: Copy static output
$staticSource = Join-Path $buildRoot "static"
$staticTarget = Join-Path $deployRoot "_next\static"
if (Test-Path $staticSource) {
    Write-Host "📂 Copying Static output: $staticSource → $staticTarget" -ForegroundColor Cyan
    Copy-Item -Path $staticSource -Destination $staticTarget -Recurse -Force
} else {
    Write-Host "⚠ Static output not found: $staticSource" -ForegroundColor Red
}

# Step 4: Move all .html → index.html
Write-Host "🔄 Converting .html files into index.html format..." -ForegroundColor Cyan
$files = Get-ChildItem -Path $deployRoot -Recurse -Include *.html | Where-Object { $_.Name -ne "index.html" }

foreach ($file in $files) {
    $dir = Join-Path $file.DirectoryName $file.BaseName
    $target = Join-Path $dir "index.html"

    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }

    Move-Item -Path $file.FullName -Destination $target -Force
    Write-Host "✔ Moved $($file.FullName) → $target"
}

# Step 5: Show deploy result
Write-Host "`n📋 Deploy completed. Main site directories:" -ForegroundColor Green
Get-ChildItem -Path $deployRoot -Directory | ForEach-Object {
    Write-Host " - $($_.FullName)"
}

Write-Host "`n✅ Deployment finished. You can now access routes like /auth/login/ in IIS." -ForegroundColor Green
