export enum ADMIN_DB_FUNCTION_NAMES {
  CreateEmployee = "create_employee",
  GetEmployees = "get_employees",
  GetEmployeesCount = "get_employees_count",
  CreatePerformanceReview="create_performance_review",
  ManageReviewAssignees="manage_review_assignees",
  GetAllPerformanceReviews="get_all_performance_reviews",
  UpdateEmployee="udpate_employee",
  DeleteEmployee="delete_employee",
  GetSubmittedReviews="get_submitted_reviews"
}
export enum PUBLIC_DB_FUNCTION_NAMES {
  Login = "login",
  GetEmployeeInfo = "get_employee_info"
}
export enum USER_DB_FUNCTION_NAMES {
  SearchEmployees = "search_employees",
  SubmitFeedback="submit_feedback",
  GetAssignedReviews="get_assigned_reviews",
}
