
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  isVerified: 'isVerified',
  isTwoFactorEnabled: 'isTwoFactorEnabled',
  method: 'method',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CandidatDataScalarFieldEnum = {
  id: 'id',
  firstname: 'firstname',
  surname: 'surname',
  birthday: 'birthday',
  phone: 'phone',
  resident: 'resident',
  about_my: 'about_my',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.CandidatLifeStateScalarFieldEnum = {
  id: 'id',
  driverCategory: 'driverCategory',
  availabilityTransport: 'availabilityTransport',
  maritalStatus: 'maritalStatus',
  cdId: 'cdId'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  degree: 'degree',
  school: 'school',
  grade: 'grade',
  startdate: 'startdate',
  enddate: 'enddate',
  description: 'description',
  cdId: 'cdId'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  skill: 'skill',
  level: 'level',
  cdId: 'cdId'
};

exports.Prisma.ExperienceScalarFieldEnum = {
  id: 'id',
  company: 'company',
  contract: 'contract',
  location: 'location',
  currently: 'currently',
  startDate: 'startDate',
  endDate: 'endDate',
  description: 'description',
  cdId: 'cdId'
};

exports.Prisma.LanguagesScalarFieldEnum = {
  id: 'id',
  language: 'language',
  level: 'level',
  cdId: 'cdId'
};

exports.Prisma.CoursesScalarFieldEnum = {
  id: 'id',
  course: 'course',
  institution: 'institution',
  grade: 'grade',
  startdate: 'startdate',
  enddate: 'enddate',
  cdId: 'cdId'
};

exports.Prisma.HobbiesScalarFieldEnum = {
  id: 'id',
  hobbie: 'hobbie',
  cdId: 'cdId'
};

exports.Prisma.AgencyDataScalarFieldEnum = {
  id: 'id',
  agency_name: 'agency_name',
  slug: 'slug',
  address: 'address',
  phone: 'phone',
  p_iva_c_f: 'p_iva_c_f',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  about: 'about',
  logo: 'logo'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  fax: 'fax',
  address: 'address',
  location: 'location',
  region: 'region',
  logo: 'logo',
  about_branch: 'about_branch',
  adId: 'adId'
};

exports.Prisma.JobOffersScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  description: 'description',
  region: 'region',
  province: 'province',
  location: 'location',
  reallyUpTo: 'reallyUpTo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isValidate: 'isValidate',
  views: 'views',
  categoryId: 'categoryId',
  contratId: 'contratId',
  experienceId: 'experienceId',
  modeId: 'modeId',
  workingTimeId: 'workingTimeId',
  levelId: 'levelId',
  agencyId: 'agencyId',
  branchId: 'branchId'
};

exports.Prisma.ContractTypeJobScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ExperienceMinimalJobScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ModeJobScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.WorkingTimeJobScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LevelEducationScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.JobTagsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  level: 'level',
  parentId: 'parentId'
};

exports.Prisma.SectorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  categoryId: 'categoryId'
};

exports.Prisma.AuthAccountScalarFieldEnum = {
  id: 'id',
  type: 'type',
  provide: 'provide',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  type: 'type',
  expiresIn: 'expiresIn',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.CandidatDataOrderByRelevanceFieldEnum = {
  id: 'id',
  firstname: 'firstname',
  surname: 'surname',
  birthday: 'birthday',
  phone: 'phone',
  resident: 'resident',
  about_my: 'about_my',
  avatar: 'avatar',
  userId: 'userId'
};

exports.Prisma.CandidatLifeStateOrderByRelevanceFieldEnum = {
  id: 'id',
  driverCategory: 'driverCategory',
  cdId: 'cdId'
};

exports.Prisma.EducationOrderByRelevanceFieldEnum = {
  id: 'id',
  degree: 'degree',
  school: 'school',
  grade: 'grade',
  description: 'description',
  cdId: 'cdId'
};

exports.Prisma.SkillsOrderByRelevanceFieldEnum = {
  id: 'id',
  skill: 'skill',
  cdId: 'cdId'
};

exports.Prisma.ExperienceOrderByRelevanceFieldEnum = {
  id: 'id',
  company: 'company',
  location: 'location',
  description: 'description',
  cdId: 'cdId'
};

exports.Prisma.LanguagesOrderByRelevanceFieldEnum = {
  id: 'id',
  language: 'language',
  cdId: 'cdId'
};

exports.Prisma.CoursesOrderByRelevanceFieldEnum = {
  id: 'id',
  course: 'course',
  institution: 'institution',
  grade: 'grade',
  cdId: 'cdId'
};

exports.Prisma.HobbiesOrderByRelevanceFieldEnum = {
  id: 'id',
  hobbie: 'hobbie',
  cdId: 'cdId'
};

exports.Prisma.AgencyDataOrderByRelevanceFieldEnum = {
  id: 'id',
  agency_name: 'agency_name',
  slug: 'slug',
  address: 'address',
  phone: 'phone',
  p_iva_c_f: 'p_iva_c_f',
  userId: 'userId',
  about: 'about',
  logo: 'logo'
};

exports.Prisma.BranchOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  fax: 'fax',
  address: 'address',
  location: 'location',
  region: 'region',
  logo: 'logo',
  about_branch: 'about_branch',
  adId: 'adId'
};

exports.Prisma.jobOffersOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  description: 'description',
  region: 'region',
  province: 'province',
  location: 'location',
  categoryId: 'categoryId',
  contratId: 'contratId',
  experienceId: 'experienceId',
  modeId: 'modeId',
  workingTimeId: 'workingTimeId',
  levelId: 'levelId',
  agencyId: 'agencyId',
  branchId: 'branchId'
};

exports.Prisma.ContractTypeJobOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ExperienceMinimalJobOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ModeJobOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.WorkingTimeJobOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LevelEducationOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.jobTagsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  parentId: 'parentId'
};

exports.Prisma.SectorsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  categoryId: 'categoryId'
};

exports.Prisma.AuthAccountOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  provide: 'provide',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  userId: 'userId'
};

exports.Prisma.TokensOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  CANDIDAT: 'CANDIDAT',
  AGENCY: 'AGENCY'
};

exports.AuthMethod = exports.$Enums.AuthMethod = {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  TELEGRAMM: 'TELEGRAMM',
  INSTAGRAM: 'INSTAGRAM',
  DISCORD: 'DISCORD'
};

exports.MaritalStatus = exports.$Enums.MaritalStatus = {
  NONE: 'NONE',
  NOT_MARRIED: 'NOT_MARRIED',
  MARRIEDNOCHILDREN: 'MARRIEDNOCHILDREN',
  MARRIEDHAVECHILDREN: 'MARRIEDHAVECHILDREN',
  DIVORCET: 'DIVORCET'
};

exports.SkillsLevel = exports.$Enums.SkillsLevel = {
  NONE: 'NONE',
  BEGINNER: 'BEGINNER',
  EXPERIENCED: 'EXPERIENCED',
  EXPERT: 'EXPERT'
};

exports.ContractType = exports.$Enums.ContractType = {
  PARTTIME: 'PARTTIME',
  SELFEMPLOYED: 'SELFEMPLOYED',
  FREELANCE: 'FREELANCE',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  APPRENTICESHIP: 'APPRENTICESHIP'
};

exports.LanguageLevel = exports.$Enums.LanguageLevel = {
  NATIVESPEAKER: 'NATIVESPEAKER',
  FLUENT: 'FLUENT',
  VERYGOOD: 'VERYGOOD',
  BASIC: 'BASIC'
};

exports.TokenType = exports.$Enums.TokenType = {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

exports.Prisma.ModelName = {
  User: 'User',
  CandidatData: 'CandidatData',
  CandidatLifeState: 'CandidatLifeState',
  Education: 'Education',
  Skills: 'Skills',
  Experience: 'Experience',
  Languages: 'Languages',
  Courses: 'Courses',
  Hobbies: 'Hobbies',
  AgencyData: 'AgencyData',
  Branch: 'Branch',
  jobOffers: 'jobOffers',
  ContractTypeJob: 'ContractTypeJob',
  ExperienceMinimalJob: 'ExperienceMinimalJob',
  ModeJob: 'ModeJob',
  WorkingTimeJob: 'WorkingTimeJob',
  LevelEducation: 'LevelEducation',
  jobTags: 'jobTags',
  Category: 'Category',
  Sectors: 'Sectors',
  AuthAccount: 'AuthAccount',
  Tokens: 'Tokens'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
