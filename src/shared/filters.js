export const careers = [
  { name: "Medicine", id: "medicine" },
  { name: "Nursing", id: "nursing" },
  { name: "Dentistry", id: "dentistry" },
  { name: "Pharmacy", id: "pharmacy" },
  { name: "Social Work", id: "social_work" },
  { name: "Public Health", id: "public_health" },
  { name: "General Health Professions", id: "allied_health" },
  { name: "General Health Sciences", id: "gen_health_sci" },
  { name: "STEM", id: "stem" },
  { name: "Other", id: "other" },
];

export const programType = [
  { name: "Certification Programs", id: "certification" },
  { name: "College Readiness Programs", id: "college_readiness" },
  { name: "Volunteer Community Service Programs", id: "community_service" },
  { name: "Health Professions School and Programs", id: "health_career" },
  { name: "Youth Camps", id: "youth_camp" },
  { name: "Mentorship Programs", id: "mentor" },
  { name: "Tutoring & Skill Building", id: "tutoring" },
  { name: "Work-based Learning Opportunities", id: "work_based" },
];

export const gradeLevels = [
  { name: "Middle School", id: "middle" },
  { name: "High School", id: "highschool" },
  { name: "Community / Technical College", id: "com_college" },
  { name: "Undergraduate", id: "undergrad" },
  { name: "Post Baccalaureate / Graduate", id: "postgrad" },
  { name: "Other", id: "other" },
];

export const duration = [
  { name: "Weekday, daytime", id: "wkday_day" },
  { name: "Weekday, evening", id: "wkday_ev" },
  { name: "Weekends", id: "wkend" },
  { name: "Year-Long", id: "year" },
  // figure how to combine summer into school break
  // { name: "Summer", id: "summer" },
  { name: "School Break (Summer, Spring, Winter)", id: "school_break" },
];

export const eligibility = [
  "General Enrollment",
  "Background Check Required",
  "Min/Max Age Requirements",
  "Citizenship/Residency Required",
  "DACA Students Eligible",
  "Enrollment Preference for Students from Underrepresented Backgrounds",
];

export const financialSupport = [
  { name: "Free Program", id: "free_program" },
  { name: "Financial Support/Scholarships Available", id: "support_available" },
  { name: "Participants Paid or Stipend Offered", id: "paid_stipend_offer" },
  { name: "Housing Provided", id: "house_provided" },
  { name: "No Financial Support Available", id: "no_support" }
];

export const shadowOppt = [
  { name: "Yes", id: 'yes' },
  { name: "No", id: 'no'}
];

export const advanced = [
  { name: "Accessible by Public Transportation", id: "public_transportation" },
  { name: "Age Requirement - Must be 18", id: "age_req" },
  { name: "Background Check Required", id: "bckgrnd_check" },
  { name: "Citizenship or Residency Required", id: "res_req" },
  { name: "Certificate on Completion", id: "cert_comp" },
  { name: "Grants/Scholarships on Completion", id: "grant_comp" },
  { name: "Loan Repayment Options", id: "pay_opt" }
  // { name: "No Background Check Required", id: "bground_check" },
  // { name: "No Pre-requisites or Experience Required", id: "prereqs" },
  // { name: "No Citizenship Required", id: "citizen" },
  // { name: "No Residency Required", id: "residency" }
];
export const prettyGrade = {
  middle: "middle school",
  highschool: "high school",
  com_college: "community college",
  undergrad: "undergraduate",
  postgrad: "post-graduate",
  other: "other",
};
export const prettyCareer = {
  clinical_lab_sciences: "clinical lab sciences",
  dentistry: "dentistry",
  ems: "EMS",
  gen_health_sci: "general health science",
  health_admin_policy: "health admin policy",
  health_info_and_tech: "health info and tech",
  imaging_tech: "imaging tech",
  int_hol_med: "internal holistic medicine",
  life_sci_engineering: "life science engineering",
  medicine: "medicine",
  mental_health: "mental health",
  nursing: "nursing",
  nutrition: "nutrition",
  other: "other",
  pharmacy: "pharmacy",
  public_health: "public health",
  rehab_med: "rehab medicine",
  research_sciences: "research_sciences",
  social_work: "social work",
  stem: "stem",
  sudp: "sudp",
  veterinary_services: "veterinary services",
  vision: "vision",
};
export const prettyPathway = {
  certification: "certification",
  college_readiness: "college readiness",
  community_service: "community service",
  health_career: "health career",
  mentor: "mentorship",
  tutoring: "tutoring",
  work_based: "work based",
  youth_camp: "youth camp",
};
