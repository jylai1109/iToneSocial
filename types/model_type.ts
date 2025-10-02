export interface TeamOrganization {
  Dept_id: number;

  Company: string;
  DeptNo?: string | null;
  DeptName?: string | null;

  ManagerNo?: string | null;
  ManagerName?: string | null;

  CreateUser: string | null;
  CreateDate: string; // 建議用 string，如果需要操作日期可轉成 Date
  UpdateUser?: string | null;
  UpdateDate?: string | null;

  LoginType?: number | null;
  IsEmpNo?: number | null;
  IsDisable?: number | null;

  OrgIDType_set_id?: number | null;
  OrgIDType?: string | null;
}

export interface TeamGroup {
  Group_Id: number;

  GroupName?: string | null;

  GroupDescription?: string | null;

  CreateUser: string;

  CreateUserName: string;

  CreateDate: string; // 從後端來的 Date 建議用 string 接

  UpdateUser?: string | null;

  UpdateUserName?: string | null;

  UpdateDate?: string | null;

  IsDisable?: number | null;
}
