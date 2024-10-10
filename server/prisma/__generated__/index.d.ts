
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CandidatData
 * 
 */
export type CandidatData = $Result.DefaultSelection<Prisma.$CandidatDataPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Languages
 * 
 */
export type Languages = $Result.DefaultSelection<Prisma.$LanguagesPayload>
/**
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Hobbies
 * 
 */
export type Hobbies = $Result.DefaultSelection<Prisma.$HobbiesPayload>
/**
 * Model AgencyData
 * 
 */
export type AgencyData = $Result.DefaultSelection<Prisma.$AgencyDataPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model AuthAccount
 * 
 */
export type AuthAccount = $Result.DefaultSelection<Prisma.$AuthAccountPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  CANDIDAT: 'CANDIDAT',
  AGENCY: 'AGENCY'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AuthMethod: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  TELEGRAMM: 'TELEGRAMM',
  INSTAGRAM: 'INSTAGRAM',
  DISCORD: 'DISCORD'
};

export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]


export const SkillsLevel: {
  NONE: 'NONE',
  BEGINNER: 'BEGINNER',
  EXPERIENCED: 'EXPERIENCED',
  EXPERT: 'EXPERT'
};

export type SkillsLevel = (typeof SkillsLevel)[keyof typeof SkillsLevel]


export const ContractType: {
  PARTTIME: 'PARTTIME',
  SELFEMPLOYED: 'SELFEMPLOYED',
  FREELANCE: 'FREELANCE',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  APPRENTICESHIP: 'APPRENTICESHIP'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const LanguageLevel: {
  NATIVESPEAKER: 'NATIVESPEAKER',
  FLUENT: 'FLUENT',
  VERYGOOD: 'VERYGOOD',
  BASIC: 'BASIC'
};

export type LanguageLevel = (typeof LanguageLevel)[keyof typeof LanguageLevel]


export const TokenType: {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AuthMethod = $Enums.AuthMethod

export const AuthMethod: typeof $Enums.AuthMethod

export type SkillsLevel = $Enums.SkillsLevel

export const SkillsLevel: typeof $Enums.SkillsLevel

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type LanguageLevel = $Enums.LanguageLevel

export const LanguageLevel: typeof $Enums.LanguageLevel

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.candidatData`: Exposes CRUD operations for the **CandidatData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidatData
    * const candidatData = await prisma.candidatData.findMany()
    * ```
    */
  get candidatData(): Prisma.CandidatDataDelegate<ExtArgs>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.LanguagesDelegate<ExtArgs>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs>;

  /**
   * `prisma.hobbies`: Exposes CRUD operations for the **Hobbies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hobbies
    * const hobbies = await prisma.hobbies.findMany()
    * ```
    */
  get hobbies(): Prisma.HobbiesDelegate<ExtArgs>;

  /**
   * `prisma.agencyData`: Exposes CRUD operations for the **AgencyData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgencyData
    * const agencyData = await prisma.agencyData.findMany()
    * ```
    */
  get agencyData(): Prisma.AgencyDataDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **AuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.AuthAccountDelegate<ExtArgs>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CandidatData: 'CandidatData',
    Education: 'Education',
    Skills: 'Skills',
    Experience: 'Experience',
    Languages: 'Languages',
    Courses: 'Courses',
    Hobbies: 'Hobbies',
    AgencyData: 'AgencyData',
    Branch: 'Branch',
    AuthAccount: 'AuthAccount',
    Tokens: 'Tokens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "candidatData" | "education" | "skills" | "experience" | "languages" | "courses" | "hobbies" | "agencyData" | "branch" | "authAccount" | "tokens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CandidatData: {
        payload: Prisma.$CandidatDataPayload<ExtArgs>
        fields: Prisma.CandidatDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          findFirst: {
            args: Prisma.CandidatDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          findMany: {
            args: Prisma.CandidatDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>[]
          }
          create: {
            args: Prisma.CandidatDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          createMany: {
            args: Prisma.CandidatDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>[]
          }
          delete: {
            args: Prisma.CandidatDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          update: {
            args: Prisma.CandidatDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          deleteMany: {
            args: Prisma.CandidatDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidatDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatDataPayload>
          }
          aggregate: {
            args: Prisma.CandidatDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidatData>
          }
          groupBy: {
            args: Prisma.CandidatDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatDataCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatDataCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Languages: {
        payload: Prisma.$LanguagesPayload<ExtArgs>
        fields: Prisma.LanguagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findFirst: {
            args: Prisma.LanguagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findMany: {
            args: Prisma.LanguagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          create: {
            args: Prisma.LanguagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          createMany: {
            args: Prisma.LanguagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          delete: {
            args: Prisma.LanguagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          update: {
            args: Prisma.LanguagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          deleteMany: {
            args: Prisma.LanguagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          aggregate: {
            args: Prisma.LanguagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguages>
          }
          groupBy: {
            args: Prisma.LanguagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguagesCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagesCountAggregateOutputType> | number
          }
        }
      }
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Hobbies: {
        payload: Prisma.$HobbiesPayload<ExtArgs>
        fields: Prisma.HobbiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HobbiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HobbiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          findFirst: {
            args: Prisma.HobbiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HobbiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          findMany: {
            args: Prisma.HobbiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>[]
          }
          create: {
            args: Prisma.HobbiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          createMany: {
            args: Prisma.HobbiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HobbiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>[]
          }
          delete: {
            args: Prisma.HobbiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          update: {
            args: Prisma.HobbiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          deleteMany: {
            args: Prisma.HobbiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HobbiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HobbiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HobbiesPayload>
          }
          aggregate: {
            args: Prisma.HobbiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHobbies>
          }
          groupBy: {
            args: Prisma.HobbiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HobbiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.HobbiesCountArgs<ExtArgs>
            result: $Utils.Optional<HobbiesCountAggregateOutputType> | number
          }
        }
      }
      AgencyData: {
        payload: Prisma.$AgencyDataPayload<ExtArgs>
        fields: Prisma.AgencyDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          findFirst: {
            args: Prisma.AgencyDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          findMany: {
            args: Prisma.AgencyDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>[]
          }
          create: {
            args: Prisma.AgencyDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          createMany: {
            args: Prisma.AgencyDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>[]
          }
          delete: {
            args: Prisma.AgencyDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          update: {
            args: Prisma.AgencyDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgencyDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyDataPayload>
          }
          aggregate: {
            args: Prisma.AgencyDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgencyData>
          }
          groupBy: {
            args: Prisma.AgencyDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyDataCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyDataCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      AuthAccount: {
        payload: Prisma.$AuthAccountPayload<ExtArgs>
        fields: Prisma.AuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findFirst: {
            args: Prisma.AuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findMany: {
            args: Prisma.AuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          create: {
            args: Prisma.AuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          createMany: {
            args: Prisma.AuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          delete: {
            args: Prisma.AuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          update: {
            args: Prisma.AuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.AuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          aggregate: {
            args: Prisma.AuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthAccount>
          }
          groupBy: {
            args: Prisma.AuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authAccounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | UserCountOutputTypeCountAuthAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
  }


  /**
   * Count Type CandidatDataCountOutputType
   */

  export type CandidatDataCountOutputType = {
    courses: number
    education: number
    experience: number
    hobbies: number
    languages: number
    skills: number
  }

  export type CandidatDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CandidatDataCountOutputTypeCountCoursesArgs
    education?: boolean | CandidatDataCountOutputTypeCountEducationArgs
    experience?: boolean | CandidatDataCountOutputTypeCountExperienceArgs
    hobbies?: boolean | CandidatDataCountOutputTypeCountHobbiesArgs
    languages?: boolean | CandidatDataCountOutputTypeCountLanguagesArgs
    skills?: boolean | CandidatDataCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatDataCountOutputType
     */
    select?: CandidatDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountHobbiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HobbiesWhereInput
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
  }

  /**
   * CandidatDataCountOutputType without action
   */
  export type CandidatDataCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
  }


  /**
   * Count Type AgencyDataCountOutputType
   */

  export type AgencyDataCountOutputType = {
    branch: number
  }

  export type AgencyDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | AgencyDataCountOutputTypeCountBranchArgs
  }

  // Custom InputTypes
  /**
   * AgencyDataCountOutputType without action
   */
  export type AgencyDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyDataCountOutputType
     */
    select?: AgencyDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyDataCountOutputType without action
   */
  export type AgencyDataCountOutputTypeCountBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    isVerified: number
    isTwoFactorEnabled: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    isVerified: boolean
    isTwoFactorEnabled: boolean
    method: $Enums.AuthMethod
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authAccounts?: boolean | User$authAccountsArgs<ExtArgs>
    agencydata?: boolean | User$agencydataArgs<ExtArgs>
    candidatdata?: boolean | User$candidatdataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | User$authAccountsArgs<ExtArgs>
    agencydata?: boolean | User$agencydataArgs<ExtArgs>
    candidatdata?: boolean | User$candidatdataArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      authAccounts: Prisma.$AuthAccountPayload<ExtArgs>[]
      agencydata: Prisma.$AgencyDataPayload<ExtArgs> | null
      candidatdata: Prisma.$CandidatDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      isVerified: boolean
      isTwoFactorEnabled: boolean
      method: $Enums.AuthMethod
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authAccounts<T extends User$authAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$authAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany"> | Null>
    agencydata<T extends User$agencydataArgs<ExtArgs> = {}>(args?: Subset<T, User$agencydataArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    candidatdata<T extends User$candidatdataArgs<ExtArgs> = {}>(args?: Subset<T, User$candidatdataArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly method: FieldRef<"User", 'AuthMethod'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.authAccounts
   */
  export type User$authAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    cursor?: AuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * User.agencydata
   */
  export type User$agencydataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    where?: AgencyDataWhereInput
  }

  /**
   * User.candidatdata
   */
  export type User$candidatdataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    where?: CandidatDataWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CandidatData
   */

  export type AggregateCandidatData = {
    _count: CandidatDataCountAggregateOutputType | null
    _min: CandidatDataMinAggregateOutputType | null
    _max: CandidatDataMaxAggregateOutputType | null
  }

  export type CandidatDataMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    surname: string | null
    birthday: string | null
    phone: string | null
    resident: string | null
    about_my: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CandidatDataMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    surname: string | null
    birthday: string | null
    phone: string | null
    resident: string | null
    about_my: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CandidatDataCountAggregateOutputType = {
    id: number
    firstname: number
    surname: number
    birthday: number
    phone: number
    resident: number
    about_my: number
    avatar: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CandidatDataMinAggregateInputType = {
    id?: true
    firstname?: true
    surname?: true
    birthday?: true
    phone?: true
    resident?: true
    about_my?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CandidatDataMaxAggregateInputType = {
    id?: true
    firstname?: true
    surname?: true
    birthday?: true
    phone?: true
    resident?: true
    about_my?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CandidatDataCountAggregateInputType = {
    id?: true
    firstname?: true
    surname?: true
    birthday?: true
    phone?: true
    resident?: true
    about_my?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CandidatDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidatData to aggregate.
     */
    where?: CandidatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidatData to fetch.
     */
    orderBy?: CandidatDataOrderByWithRelationInput | CandidatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidatData
    **/
    _count?: true | CandidatDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatDataMaxAggregateInputType
  }

  export type GetCandidatDataAggregateType<T extends CandidatDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidatData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidatData[P]>
      : GetScalarType<T[P], AggregateCandidatData[P]>
  }




  export type CandidatDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatDataWhereInput
    orderBy?: CandidatDataOrderByWithAggregationInput | CandidatDataOrderByWithAggregationInput[]
    by: CandidatDataScalarFieldEnum[] | CandidatDataScalarFieldEnum
    having?: CandidatDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatDataCountAggregateInputType | true
    _min?: CandidatDataMinAggregateInputType
    _max?: CandidatDataMaxAggregateInputType
  }

  export type CandidatDataGroupByOutputType = {
    id: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CandidatDataCountAggregateOutputType | null
    _min: CandidatDataMinAggregateOutputType | null
    _max: CandidatDataMaxAggregateOutputType | null
  }

  type GetCandidatDataGroupByPayload<T extends CandidatDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatDataGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatDataGroupByOutputType[P]>
        }
      >
    >


  export type CandidatDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    surname?: boolean
    birthday?: boolean
    phone?: boolean
    resident?: boolean
    about_my?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    courses?: boolean | CandidatData$coursesArgs<ExtArgs>
    education?: boolean | CandidatData$educationArgs<ExtArgs>
    experience?: boolean | CandidatData$experienceArgs<ExtArgs>
    hobbies?: boolean | CandidatData$hobbiesArgs<ExtArgs>
    languages?: boolean | CandidatData$languagesArgs<ExtArgs>
    skills?: boolean | CandidatData$skillsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CandidatDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidatData"]>

  export type CandidatDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    surname?: boolean
    birthday?: boolean
    phone?: boolean
    resident?: boolean
    about_my?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidatData"]>

  export type CandidatDataSelectScalar = {
    id?: boolean
    firstname?: boolean
    surname?: boolean
    birthday?: boolean
    phone?: boolean
    resident?: boolean
    about_my?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CandidatDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CandidatData$coursesArgs<ExtArgs>
    education?: boolean | CandidatData$educationArgs<ExtArgs>
    experience?: boolean | CandidatData$experienceArgs<ExtArgs>
    hobbies?: boolean | CandidatData$hobbiesArgs<ExtArgs>
    languages?: boolean | CandidatData$languagesArgs<ExtArgs>
    skills?: boolean | CandidatData$skillsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CandidatDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidatDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidatDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidatData"
    objects: {
      courses: Prisma.$CoursesPayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      hobbies: Prisma.$HobbiesPayload<ExtArgs>[]
      languages: Prisma.$LanguagesPayload<ExtArgs>[]
      skills: Prisma.$SkillsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      surname: string
      birthday: string
      phone: string
      resident: string
      about_my: string
      avatar: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["candidatData"]>
    composites: {}
  }

  type CandidatDataGetPayload<S extends boolean | null | undefined | CandidatDataDefaultArgs> = $Result.GetResult<Prisma.$CandidatDataPayload, S>

  type CandidatDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CandidatDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CandidatDataCountAggregateInputType | true
    }

  export interface CandidatDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidatData'], meta: { name: 'CandidatData' } }
    /**
     * Find zero or one CandidatData that matches the filter.
     * @param {CandidatDataFindUniqueArgs} args - Arguments to find a CandidatData
     * @example
     * // Get one CandidatData
     * const candidatData = await prisma.candidatData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatDataFindUniqueArgs>(args: SelectSubset<T, CandidatDataFindUniqueArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CandidatData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CandidatDataFindUniqueOrThrowArgs} args - Arguments to find a CandidatData
     * @example
     * // Get one CandidatData
     * const candidatData = await prisma.candidatData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatDataFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CandidatData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataFindFirstArgs} args - Arguments to find a CandidatData
     * @example
     * // Get one CandidatData
     * const candidatData = await prisma.candidatData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatDataFindFirstArgs>(args?: SelectSubset<T, CandidatDataFindFirstArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CandidatData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataFindFirstOrThrowArgs} args - Arguments to find a CandidatData
     * @example
     * // Get one CandidatData
     * const candidatData = await prisma.candidatData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatDataFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CandidatData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidatData
     * const candidatData = await prisma.candidatData.findMany()
     * 
     * // Get first 10 CandidatData
     * const candidatData = await prisma.candidatData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatDataWithIdOnly = await prisma.candidatData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatDataFindManyArgs>(args?: SelectSubset<T, CandidatDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CandidatData.
     * @param {CandidatDataCreateArgs} args - Arguments to create a CandidatData.
     * @example
     * // Create one CandidatData
     * const CandidatData = await prisma.candidatData.create({
     *   data: {
     *     // ... data to create a CandidatData
     *   }
     * })
     * 
     */
    create<T extends CandidatDataCreateArgs>(args: SelectSubset<T, CandidatDataCreateArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CandidatData.
     * @param {CandidatDataCreateManyArgs} args - Arguments to create many CandidatData.
     * @example
     * // Create many CandidatData
     * const candidatData = await prisma.candidatData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatDataCreateManyArgs>(args?: SelectSubset<T, CandidatDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidatData and returns the data saved in the database.
     * @param {CandidatDataCreateManyAndReturnArgs} args - Arguments to create many CandidatData.
     * @example
     * // Create many CandidatData
     * const candidatData = await prisma.candidatData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidatData and only return the `id`
     * const candidatDataWithIdOnly = await prisma.candidatData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatDataCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CandidatData.
     * @param {CandidatDataDeleteArgs} args - Arguments to delete one CandidatData.
     * @example
     * // Delete one CandidatData
     * const CandidatData = await prisma.candidatData.delete({
     *   where: {
     *     // ... filter to delete one CandidatData
     *   }
     * })
     * 
     */
    delete<T extends CandidatDataDeleteArgs>(args: SelectSubset<T, CandidatDataDeleteArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CandidatData.
     * @param {CandidatDataUpdateArgs} args - Arguments to update one CandidatData.
     * @example
     * // Update one CandidatData
     * const candidatData = await prisma.candidatData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatDataUpdateArgs>(args: SelectSubset<T, CandidatDataUpdateArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CandidatData.
     * @param {CandidatDataDeleteManyArgs} args - Arguments to filter CandidatData to delete.
     * @example
     * // Delete a few CandidatData
     * const { count } = await prisma.candidatData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatDataDeleteManyArgs>(args?: SelectSubset<T, CandidatDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidatData
     * const candidatData = await prisma.candidatData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatDataUpdateManyArgs>(args: SelectSubset<T, CandidatDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CandidatData.
     * @param {CandidatDataUpsertArgs} args - Arguments to update or create a CandidatData.
     * @example
     * // Update or create a CandidatData
     * const candidatData = await prisma.candidatData.upsert({
     *   create: {
     *     // ... data to create a CandidatData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidatData we want to update
     *   }
     * })
     */
    upsert<T extends CandidatDataUpsertArgs>(args: SelectSubset<T, CandidatDataUpsertArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CandidatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataCountArgs} args - Arguments to filter CandidatData to count.
     * @example
     * // Count the number of CandidatData
     * const count = await prisma.candidatData.count({
     *   where: {
     *     // ... the filter for the CandidatData we want to count
     *   }
     * })
    **/
    count<T extends CandidatDataCountArgs>(
      args?: Subset<T, CandidatDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatDataAggregateArgs>(args: Subset<T, CandidatDataAggregateArgs>): Prisma.PrismaPromise<GetCandidatDataAggregateType<T>>

    /**
     * Group by CandidatData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidatDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatDataGroupByArgs['orderBy'] }
        : { orderBy?: CandidatDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidatDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidatData model
   */
  readonly fields: CandidatDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidatData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends CandidatData$coursesArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany"> | Null>
    education<T extends CandidatData$educationArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany"> | Null>
    experience<T extends CandidatData$experienceArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany"> | Null>
    hobbies<T extends CandidatData$hobbiesArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$hobbiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findMany"> | Null>
    languages<T extends CandidatData$languagesArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany"> | Null>
    skills<T extends CandidatData$skillsArgs<ExtArgs> = {}>(args?: Subset<T, CandidatData$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidatData model
   */ 
  interface CandidatDataFieldRefs {
    readonly id: FieldRef<"CandidatData", 'String'>
    readonly firstname: FieldRef<"CandidatData", 'String'>
    readonly surname: FieldRef<"CandidatData", 'String'>
    readonly birthday: FieldRef<"CandidatData", 'String'>
    readonly phone: FieldRef<"CandidatData", 'String'>
    readonly resident: FieldRef<"CandidatData", 'String'>
    readonly about_my: FieldRef<"CandidatData", 'String'>
    readonly avatar: FieldRef<"CandidatData", 'String'>
    readonly createdAt: FieldRef<"CandidatData", 'DateTime'>
    readonly updatedAt: FieldRef<"CandidatData", 'DateTime'>
    readonly userId: FieldRef<"CandidatData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CandidatData findUnique
   */
  export type CandidatDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter, which CandidatData to fetch.
     */
    where: CandidatDataWhereUniqueInput
  }

  /**
   * CandidatData findUniqueOrThrow
   */
  export type CandidatDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter, which CandidatData to fetch.
     */
    where: CandidatDataWhereUniqueInput
  }

  /**
   * CandidatData findFirst
   */
  export type CandidatDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter, which CandidatData to fetch.
     */
    where?: CandidatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidatData to fetch.
     */
    orderBy?: CandidatDataOrderByWithRelationInput | CandidatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidatData.
     */
    cursor?: CandidatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidatData.
     */
    distinct?: CandidatDataScalarFieldEnum | CandidatDataScalarFieldEnum[]
  }

  /**
   * CandidatData findFirstOrThrow
   */
  export type CandidatDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter, which CandidatData to fetch.
     */
    where?: CandidatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidatData to fetch.
     */
    orderBy?: CandidatDataOrderByWithRelationInput | CandidatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidatData.
     */
    cursor?: CandidatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidatData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidatData.
     */
    distinct?: CandidatDataScalarFieldEnum | CandidatDataScalarFieldEnum[]
  }

  /**
   * CandidatData findMany
   */
  export type CandidatDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter, which CandidatData to fetch.
     */
    where?: CandidatDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidatData to fetch.
     */
    orderBy?: CandidatDataOrderByWithRelationInput | CandidatDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidatData.
     */
    cursor?: CandidatDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidatData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidatData.
     */
    skip?: number
    distinct?: CandidatDataScalarFieldEnum | CandidatDataScalarFieldEnum[]
  }

  /**
   * CandidatData create
   */
  export type CandidatDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidatData.
     */
    data: XOR<CandidatDataCreateInput, CandidatDataUncheckedCreateInput>
  }

  /**
   * CandidatData createMany
   */
  export type CandidatDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidatData.
     */
    data: CandidatDataCreateManyInput | CandidatDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidatData createManyAndReturn
   */
  export type CandidatDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CandidatData.
     */
    data: CandidatDataCreateManyInput | CandidatDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidatData update
   */
  export type CandidatDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidatData.
     */
    data: XOR<CandidatDataUpdateInput, CandidatDataUncheckedUpdateInput>
    /**
     * Choose, which CandidatData to update.
     */
    where: CandidatDataWhereUniqueInput
  }

  /**
   * CandidatData updateMany
   */
  export type CandidatDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidatData.
     */
    data: XOR<CandidatDataUpdateManyMutationInput, CandidatDataUncheckedUpdateManyInput>
    /**
     * Filter which CandidatData to update
     */
    where?: CandidatDataWhereInput
  }

  /**
   * CandidatData upsert
   */
  export type CandidatDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidatData to update in case it exists.
     */
    where: CandidatDataWhereUniqueInput
    /**
     * In case the CandidatData found by the `where` argument doesn't exist, create a new CandidatData with this data.
     */
    create: XOR<CandidatDataCreateInput, CandidatDataUncheckedCreateInput>
    /**
     * In case the CandidatData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatDataUpdateInput, CandidatDataUncheckedUpdateInput>
  }

  /**
   * CandidatData delete
   */
  export type CandidatDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
    /**
     * Filter which CandidatData to delete.
     */
    where: CandidatDataWhereUniqueInput
  }

  /**
   * CandidatData deleteMany
   */
  export type CandidatDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidatData to delete
     */
    where?: CandidatDataWhereInput
  }

  /**
   * CandidatData.courses
   */
  export type CandidatData$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    cursor?: CoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * CandidatData.education
   */
  export type CandidatData$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * CandidatData.experience
   */
  export type CandidatData$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * CandidatData.hobbies
   */
  export type CandidatData$hobbiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    where?: HobbiesWhereInput
    orderBy?: HobbiesOrderByWithRelationInput | HobbiesOrderByWithRelationInput[]
    cursor?: HobbiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HobbiesScalarFieldEnum | HobbiesScalarFieldEnum[]
  }

  /**
   * CandidatData.languages
   */
  export type CandidatData$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    cursor?: LanguagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * CandidatData.skills
   */
  export type CandidatData$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * CandidatData without action
   */
  export type CandidatDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatData
     */
    select?: CandidatDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatDataInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    degree: string | null
    school: string | null
    grade: string | null
    startdate: Date | null
    enddate: Date | null
    description: string | null
    cdId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    degree: string | null
    school: string | null
    grade: string | null
    startdate: Date | null
    enddate: Date | null
    description: string | null
    cdId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    degree: number
    school: number
    grade: number
    startdate: number
    enddate: number
    description: number
    cdId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    grade?: true
    startdate?: true
    enddate?: true
    description?: true
    cdId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    grade?: true
    startdate?: true
    enddate?: true
    description?: true
    cdId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    degree?: true
    school?: true
    grade?: true
    startdate?: true
    enddate?: true
    description?: true
    cdId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    degree: string
    school: string
    grade: string | null
    startdate: Date
    enddate: Date
    description: string | null
    cdId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    school?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    description?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    degree?: boolean
    school?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    description?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    degree?: boolean
    school?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    description?: boolean
    cdId?: boolean
  }

  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      degree: string
      school: string
      grade: string | null
      startdate: Date
      enddate: Date
      description: string | null
      cdId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */ 
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly school: FieldRef<"Education", 'String'>
    readonly grade: FieldRef<"Education", 'String'>
    readonly startdate: FieldRef<"Education", 'DateTime'>
    readonly enddate: FieldRef<"Education", 'DateTime'>
    readonly description: FieldRef<"Education", 'String'>
    readonly cdId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsMinAggregateOutputType = {
    id: string | null
    skill: string | null
    level: $Enums.SkillsLevel | null
    cdId: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: string | null
    skill: string | null
    level: $Enums.SkillsLevel | null
    cdId: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    skill: number
    level: number
    cdId: number
    _all: number
  }


  export type SkillsMinAggregateInputType = {
    id?: true
    skill?: true
    level?: true
    cdId?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    skill?: true
    level?: true
    cdId?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    skill?: true
    level?: true
    cdId?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: string
    skill: string
    level: $Enums.SkillsLevel
    cdId: string
    _count: SkillsCountAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    level?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    level?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    skill?: boolean
    level?: boolean
    cdId?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type SkillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skill: string
      level: $Enums.SkillsLevel
      cdId: string
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillsFindUniqueArgs>(args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillsFindFirstArgs>(args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillsFindManyArgs>(args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends SkillsCreateArgs>(args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillsCreateManyArgs>(args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillsCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends SkillsDeleteArgs>(args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillsUpdateArgs>(args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillsDeleteManyArgs>(args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillsUpdateManyArgs>(args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends SkillsUpsertArgs>(args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skills model
   */ 
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'String'>
    readonly skill: FieldRef<"Skills", 'String'>
    readonly level: FieldRef<"Skills", 'SkillsLevel'>
    readonly cdId: FieldRef<"Skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }

  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skills createManyAndReturn
   */
  export type SkillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
  }

  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }

  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }

  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
  }

  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillsInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    company: string | null
    contract: $Enums.ContractType | null
    location: string | null
    currently: boolean | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cdId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    company: string | null
    contract: $Enums.ContractType | null
    location: string | null
    currently: boolean | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cdId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    company: number
    contract: number
    location: number
    currently: number
    startDate: number
    endDate: number
    description: number
    cdId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    company?: true
    contract?: true
    location?: true
    currently?: true
    startDate?: true
    endDate?: true
    description?: true
    cdId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    contract?: true
    location?: true
    currently?: true
    startDate?: true
    endDate?: true
    description?: true
    cdId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    company?: true
    contract?: true
    location?: true
    currently?: true
    startDate?: true
    endDate?: true
    description?: true
    cdId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    company: string
    contract: $Enums.ContractType
    location: string | null
    currently: boolean
    startDate: Date
    endDate: Date
    description: string | null
    cdId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    contract?: boolean
    location?: boolean
    currently?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    contract?: boolean
    location?: boolean
    currently?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    company?: boolean
    contract?: boolean
    location?: boolean
    currently?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cdId?: boolean
  }

  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      contract: $Enums.ContractType
      location: string | null
      currently: boolean
      startDate: Date
      endDate: Date
      description: string | null
      cdId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */ 
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly contract: FieldRef<"Experience", 'ContractType'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly currently: FieldRef<"Experience", 'Boolean'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly cdId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Languages
   */

  export type AggregateLanguages = {
    _count: LanguagesCountAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  export type LanguagesMinAggregateOutputType = {
    id: string | null
    language: string | null
    level: $Enums.LanguageLevel | null
    cdId: string | null
  }

  export type LanguagesMaxAggregateOutputType = {
    id: string | null
    language: string | null
    level: $Enums.LanguageLevel | null
    cdId: string | null
  }

  export type LanguagesCountAggregateOutputType = {
    id: number
    language: number
    level: number
    cdId: number
    _all: number
  }


  export type LanguagesMinAggregateInputType = {
    id?: true
    language?: true
    level?: true
    cdId?: true
  }

  export type LanguagesMaxAggregateInputType = {
    id?: true
    language?: true
    level?: true
    cdId?: true
  }

  export type LanguagesCountAggregateInputType = {
    id?: true
    language?: true
    level?: true
    cdId?: true
    _all?: true
  }

  export type LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to aggregate.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagesMaxAggregateInputType
  }

  export type GetLanguagesAggregateType<T extends LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguages[P]>
      : GetScalarType<T[P], AggregateLanguages[P]>
  }




  export type LanguagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithAggregationInput | LanguagesOrderByWithAggregationInput[]
    by: LanguagesScalarFieldEnum[] | LanguagesScalarFieldEnum
    having?: LanguagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagesCountAggregateInputType | true
    _min?: LanguagesMinAggregateInputType
    _max?: LanguagesMaxAggregateInputType
  }

  export type LanguagesGroupByOutputType = {
    id: string
    language: string
    level: $Enums.LanguageLevel
    cdId: string
    _count: LanguagesCountAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  type GetLanguagesGroupByPayload<T extends LanguagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type LanguagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    level?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    level?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectScalar = {
    id?: boolean
    language?: boolean
    level?: boolean
    cdId?: boolean
  }

  export type LanguagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type LanguagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $LanguagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Languages"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      language: string
      level: $Enums.LanguageLevel
      cdId: string
    }, ExtArgs["result"]["languages"]>
    composites: {}
  }

  type LanguagesGetPayload<S extends boolean | null | undefined | LanguagesDefaultArgs> = $Result.GetResult<Prisma.$LanguagesPayload, S>

  type LanguagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LanguagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LanguagesCountAggregateInputType | true
    }

  export interface LanguagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Languages'], meta: { name: 'Languages' } }
    /**
     * Find zero or one Languages that matches the filter.
     * @param {LanguagesFindUniqueArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguagesFindUniqueArgs>(args: SelectSubset<T, LanguagesFindUniqueArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Languages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LanguagesFindUniqueOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguagesFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguagesFindFirstArgs>(args?: SelectSubset<T, LanguagesFindFirstArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguagesFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.languages.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.languages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languagesWithIdOnly = await prisma.languages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguagesFindManyArgs>(args?: SelectSubset<T, LanguagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Languages.
     * @param {LanguagesCreateArgs} args - Arguments to create a Languages.
     * @example
     * // Create one Languages
     * const Languages = await prisma.languages.create({
     *   data: {
     *     // ... data to create a Languages
     *   }
     * })
     * 
     */
    create<T extends LanguagesCreateArgs>(args: SelectSubset<T, LanguagesCreateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Languages.
     * @param {LanguagesCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguagesCreateManyArgs>(args?: SelectSubset<T, LanguagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguagesCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguagesCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Languages.
     * @param {LanguagesDeleteArgs} args - Arguments to delete one Languages.
     * @example
     * // Delete one Languages
     * const Languages = await prisma.languages.delete({
     *   where: {
     *     // ... filter to delete one Languages
     *   }
     * })
     * 
     */
    delete<T extends LanguagesDeleteArgs>(args: SelectSubset<T, LanguagesDeleteArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Languages.
     * @param {LanguagesUpdateArgs} args - Arguments to update one Languages.
     * @example
     * // Update one Languages
     * const languages = await prisma.languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguagesUpdateArgs>(args: SelectSubset<T, LanguagesUpdateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Languages.
     * @param {LanguagesDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguagesDeleteManyArgs>(args?: SelectSubset<T, LanguagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguagesUpdateManyArgs>(args: SelectSubset<T, LanguagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Languages.
     * @param {LanguagesUpsertArgs} args - Arguments to update or create a Languages.
     * @example
     * // Update or create a Languages
     * const languages = await prisma.languages.upsert({
     *   create: {
     *     // ... data to create a Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Languages we want to update
     *   }
     * })
     */
    upsert<T extends LanguagesUpsertArgs>(args: SelectSubset<T, LanguagesUpsertArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.languages.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguagesCountArgs>(
      args?: Subset<T, LanguagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguagesAggregateArgs>(args: Subset<T, LanguagesAggregateArgs>): Prisma.PrismaPromise<GetLanguagesAggregateType<T>>

    /**
     * Group by Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguagesGroupByArgs['orderBy'] }
        : { orderBy?: LanguagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Languages model
   */
  readonly fields: LanguagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Languages model
   */ 
  interface LanguagesFieldRefs {
    readonly id: FieldRef<"Languages", 'String'>
    readonly language: FieldRef<"Languages", 'String'>
    readonly level: FieldRef<"Languages", 'LanguageLevel'>
    readonly cdId: FieldRef<"Languages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Languages findUnique
   */
  export type LanguagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findUniqueOrThrow
   */
  export type LanguagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findFirst
   */
  export type LanguagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findFirstOrThrow
   */
  export type LanguagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findMany
   */
  export type LanguagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages create
   */
  export type LanguagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Languages.
     */
    data: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
  }

  /**
   * Languages createMany
   */
  export type LanguagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Languages createManyAndReturn
   */
  export type LanguagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Languages update
   */
  export type LanguagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Languages.
     */
    data: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
    /**
     * Choose, which Languages to update.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages updateMany
   */
  export type LanguagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguagesWhereInput
  }

  /**
   * Languages upsert
   */
  export type LanguagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Languages to update in case it exists.
     */
    where: LanguagesWhereUniqueInput
    /**
     * In case the Languages found by the `where` argument doesn't exist, create a new Languages with this data.
     */
    create: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
    /**
     * In case the Languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
  }

  /**
   * Languages delete
   */
  export type LanguagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter which Languages to delete.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages deleteMany
   */
  export type LanguagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguagesWhereInput
  }

  /**
   * Languages without action
   */
  export type LanguagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
  }


  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesMinAggregateOutputType = {
    id: string | null
    course: string | null
    institution: string | null
    grade: string | null
    startdate: Date | null
    enddate: Date | null
    cdId: string | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: string | null
    course: string | null
    institution: string | null
    grade: string | null
    startdate: Date | null
    enddate: Date | null
    cdId: string | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    course: number
    institution: number
    grade: number
    startdate: number
    enddate: number
    cdId: number
    _all: number
  }


  export type CoursesMinAggregateInputType = {
    id?: true
    course?: true
    institution?: true
    grade?: true
    startdate?: true
    enddate?: true
    cdId?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    course?: true
    institution?: true
    grade?: true
    startdate?: true
    enddate?: true
    cdId?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    course?: true
    institution?: true
    grade?: true
    startdate?: true
    enddate?: true
    cdId?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: string
    course: string
    institution: string
    grade: string
    startdate: Date
    enddate: Date
    cdId: string
    _count: CoursesCountAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    institution?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course?: boolean
    institution?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectScalar = {
    id?: boolean
    course?: boolean
    institution?: boolean
    grade?: boolean
    startdate?: boolean
    enddate?: boolean
    cdId?: boolean
  }

  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type CoursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      course: string
      institution: string
      grade: string
      startdate: Date
      enddate: Date
      cdId: string
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CoursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courses model
   */ 
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'String'>
    readonly course: FieldRef<"Courses", 'String'>
    readonly institution: FieldRef<"Courses", 'String'>
    readonly grade: FieldRef<"Courses", 'String'>
    readonly startdate: FieldRef<"Courses", 'DateTime'>
    readonly enddate: FieldRef<"Courses", 'DateTime'>
    readonly cdId: FieldRef<"Courses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses createManyAndReturn
   */
  export type CoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model Hobbies
   */

  export type AggregateHobbies = {
    _count: HobbiesCountAggregateOutputType | null
    _min: HobbiesMinAggregateOutputType | null
    _max: HobbiesMaxAggregateOutputType | null
  }

  export type HobbiesMinAggregateOutputType = {
    id: string | null
    hobbie: string | null
    cdId: string | null
  }

  export type HobbiesMaxAggregateOutputType = {
    id: string | null
    hobbie: string | null
    cdId: string | null
  }

  export type HobbiesCountAggregateOutputType = {
    id: number
    hobbie: number
    cdId: number
    _all: number
  }


  export type HobbiesMinAggregateInputType = {
    id?: true
    hobbie?: true
    cdId?: true
  }

  export type HobbiesMaxAggregateInputType = {
    id?: true
    hobbie?: true
    cdId?: true
  }

  export type HobbiesCountAggregateInputType = {
    id?: true
    hobbie?: true
    cdId?: true
    _all?: true
  }

  export type HobbiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hobbies to aggregate.
     */
    where?: HobbiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hobbies to fetch.
     */
    orderBy?: HobbiesOrderByWithRelationInput | HobbiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HobbiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hobbies
    **/
    _count?: true | HobbiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HobbiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HobbiesMaxAggregateInputType
  }

  export type GetHobbiesAggregateType<T extends HobbiesAggregateArgs> = {
        [P in keyof T & keyof AggregateHobbies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHobbies[P]>
      : GetScalarType<T[P], AggregateHobbies[P]>
  }




  export type HobbiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HobbiesWhereInput
    orderBy?: HobbiesOrderByWithAggregationInput | HobbiesOrderByWithAggregationInput[]
    by: HobbiesScalarFieldEnum[] | HobbiesScalarFieldEnum
    having?: HobbiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HobbiesCountAggregateInputType | true
    _min?: HobbiesMinAggregateInputType
    _max?: HobbiesMaxAggregateInputType
  }

  export type HobbiesGroupByOutputType = {
    id: string
    hobbie: string
    cdId: string
    _count: HobbiesCountAggregateOutputType | null
    _min: HobbiesMinAggregateOutputType | null
    _max: HobbiesMaxAggregateOutputType | null
  }

  type GetHobbiesGroupByPayload<T extends HobbiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HobbiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HobbiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HobbiesGroupByOutputType[P]>
            : GetScalarType<T[P], HobbiesGroupByOutputType[P]>
        }
      >
    >


  export type HobbiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hobbie?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hobbies"]>

  export type HobbiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hobbie?: boolean
    cdId?: boolean
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hobbies"]>

  export type HobbiesSelectScalar = {
    id?: boolean
    hobbie?: boolean
    cdId?: boolean
  }

  export type HobbiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }
  export type HobbiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidatDataDefaultArgs<ExtArgs>
  }

  export type $HobbiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hobbies"
    objects: {
      candidate: Prisma.$CandidatDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hobbie: string
      cdId: string
    }, ExtArgs["result"]["hobbies"]>
    composites: {}
  }

  type HobbiesGetPayload<S extends boolean | null | undefined | HobbiesDefaultArgs> = $Result.GetResult<Prisma.$HobbiesPayload, S>

  type HobbiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HobbiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HobbiesCountAggregateInputType | true
    }

  export interface HobbiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hobbies'], meta: { name: 'Hobbies' } }
    /**
     * Find zero or one Hobbies that matches the filter.
     * @param {HobbiesFindUniqueArgs} args - Arguments to find a Hobbies
     * @example
     * // Get one Hobbies
     * const hobbies = await prisma.hobbies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HobbiesFindUniqueArgs>(args: SelectSubset<T, HobbiesFindUniqueArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hobbies that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HobbiesFindUniqueOrThrowArgs} args - Arguments to find a Hobbies
     * @example
     * // Get one Hobbies
     * const hobbies = await prisma.hobbies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HobbiesFindUniqueOrThrowArgs>(args: SelectSubset<T, HobbiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hobbies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesFindFirstArgs} args - Arguments to find a Hobbies
     * @example
     * // Get one Hobbies
     * const hobbies = await prisma.hobbies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HobbiesFindFirstArgs>(args?: SelectSubset<T, HobbiesFindFirstArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hobbies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesFindFirstOrThrowArgs} args - Arguments to find a Hobbies
     * @example
     * // Get one Hobbies
     * const hobbies = await prisma.hobbies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HobbiesFindFirstOrThrowArgs>(args?: SelectSubset<T, HobbiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hobbies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hobbies
     * const hobbies = await prisma.hobbies.findMany()
     * 
     * // Get first 10 Hobbies
     * const hobbies = await prisma.hobbies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hobbiesWithIdOnly = await prisma.hobbies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HobbiesFindManyArgs>(args?: SelectSubset<T, HobbiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hobbies.
     * @param {HobbiesCreateArgs} args - Arguments to create a Hobbies.
     * @example
     * // Create one Hobbies
     * const Hobbies = await prisma.hobbies.create({
     *   data: {
     *     // ... data to create a Hobbies
     *   }
     * })
     * 
     */
    create<T extends HobbiesCreateArgs>(args: SelectSubset<T, HobbiesCreateArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hobbies.
     * @param {HobbiesCreateManyArgs} args - Arguments to create many Hobbies.
     * @example
     * // Create many Hobbies
     * const hobbies = await prisma.hobbies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HobbiesCreateManyArgs>(args?: SelectSubset<T, HobbiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hobbies and returns the data saved in the database.
     * @param {HobbiesCreateManyAndReturnArgs} args - Arguments to create many Hobbies.
     * @example
     * // Create many Hobbies
     * const hobbies = await prisma.hobbies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hobbies and only return the `id`
     * const hobbiesWithIdOnly = await prisma.hobbies.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HobbiesCreateManyAndReturnArgs>(args?: SelectSubset<T, HobbiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hobbies.
     * @param {HobbiesDeleteArgs} args - Arguments to delete one Hobbies.
     * @example
     * // Delete one Hobbies
     * const Hobbies = await prisma.hobbies.delete({
     *   where: {
     *     // ... filter to delete one Hobbies
     *   }
     * })
     * 
     */
    delete<T extends HobbiesDeleteArgs>(args: SelectSubset<T, HobbiesDeleteArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hobbies.
     * @param {HobbiesUpdateArgs} args - Arguments to update one Hobbies.
     * @example
     * // Update one Hobbies
     * const hobbies = await prisma.hobbies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HobbiesUpdateArgs>(args: SelectSubset<T, HobbiesUpdateArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hobbies.
     * @param {HobbiesDeleteManyArgs} args - Arguments to filter Hobbies to delete.
     * @example
     * // Delete a few Hobbies
     * const { count } = await prisma.hobbies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HobbiesDeleteManyArgs>(args?: SelectSubset<T, HobbiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hobbies
     * const hobbies = await prisma.hobbies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HobbiesUpdateManyArgs>(args: SelectSubset<T, HobbiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hobbies.
     * @param {HobbiesUpsertArgs} args - Arguments to update or create a Hobbies.
     * @example
     * // Update or create a Hobbies
     * const hobbies = await prisma.hobbies.upsert({
     *   create: {
     *     // ... data to create a Hobbies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hobbies we want to update
     *   }
     * })
     */
    upsert<T extends HobbiesUpsertArgs>(args: SelectSubset<T, HobbiesUpsertArgs<ExtArgs>>): Prisma__HobbiesClient<$Result.GetResult<Prisma.$HobbiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesCountArgs} args - Arguments to filter Hobbies to count.
     * @example
     * // Count the number of Hobbies
     * const count = await prisma.hobbies.count({
     *   where: {
     *     // ... the filter for the Hobbies we want to count
     *   }
     * })
    **/
    count<T extends HobbiesCountArgs>(
      args?: Subset<T, HobbiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HobbiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HobbiesAggregateArgs>(args: Subset<T, HobbiesAggregateArgs>): Prisma.PrismaPromise<GetHobbiesAggregateType<T>>

    /**
     * Group by Hobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HobbiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HobbiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HobbiesGroupByArgs['orderBy'] }
        : { orderBy?: HobbiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HobbiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHobbiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hobbies model
   */
  readonly fields: HobbiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hobbies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HobbiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidatDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDataDefaultArgs<ExtArgs>>): Prisma__CandidatDataClient<$Result.GetResult<Prisma.$CandidatDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hobbies model
   */ 
  interface HobbiesFieldRefs {
    readonly id: FieldRef<"Hobbies", 'String'>
    readonly hobbie: FieldRef<"Hobbies", 'String'>
    readonly cdId: FieldRef<"Hobbies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hobbies findUnique
   */
  export type HobbiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter, which Hobbies to fetch.
     */
    where: HobbiesWhereUniqueInput
  }

  /**
   * Hobbies findUniqueOrThrow
   */
  export type HobbiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter, which Hobbies to fetch.
     */
    where: HobbiesWhereUniqueInput
  }

  /**
   * Hobbies findFirst
   */
  export type HobbiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter, which Hobbies to fetch.
     */
    where?: HobbiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hobbies to fetch.
     */
    orderBy?: HobbiesOrderByWithRelationInput | HobbiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hobbies.
     */
    cursor?: HobbiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hobbies.
     */
    distinct?: HobbiesScalarFieldEnum | HobbiesScalarFieldEnum[]
  }

  /**
   * Hobbies findFirstOrThrow
   */
  export type HobbiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter, which Hobbies to fetch.
     */
    where?: HobbiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hobbies to fetch.
     */
    orderBy?: HobbiesOrderByWithRelationInput | HobbiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hobbies.
     */
    cursor?: HobbiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hobbies.
     */
    distinct?: HobbiesScalarFieldEnum | HobbiesScalarFieldEnum[]
  }

  /**
   * Hobbies findMany
   */
  export type HobbiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter, which Hobbies to fetch.
     */
    where?: HobbiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hobbies to fetch.
     */
    orderBy?: HobbiesOrderByWithRelationInput | HobbiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hobbies.
     */
    cursor?: HobbiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hobbies.
     */
    skip?: number
    distinct?: HobbiesScalarFieldEnum | HobbiesScalarFieldEnum[]
  }

  /**
   * Hobbies create
   */
  export type HobbiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Hobbies.
     */
    data: XOR<HobbiesCreateInput, HobbiesUncheckedCreateInput>
  }

  /**
   * Hobbies createMany
   */
  export type HobbiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hobbies.
     */
    data: HobbiesCreateManyInput | HobbiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hobbies createManyAndReturn
   */
  export type HobbiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hobbies.
     */
    data: HobbiesCreateManyInput | HobbiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hobbies update
   */
  export type HobbiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Hobbies.
     */
    data: XOR<HobbiesUpdateInput, HobbiesUncheckedUpdateInput>
    /**
     * Choose, which Hobbies to update.
     */
    where: HobbiesWhereUniqueInput
  }

  /**
   * Hobbies updateMany
   */
  export type HobbiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hobbies.
     */
    data: XOR<HobbiesUpdateManyMutationInput, HobbiesUncheckedUpdateManyInput>
    /**
     * Filter which Hobbies to update
     */
    where?: HobbiesWhereInput
  }

  /**
   * Hobbies upsert
   */
  export type HobbiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Hobbies to update in case it exists.
     */
    where: HobbiesWhereUniqueInput
    /**
     * In case the Hobbies found by the `where` argument doesn't exist, create a new Hobbies with this data.
     */
    create: XOR<HobbiesCreateInput, HobbiesUncheckedCreateInput>
    /**
     * In case the Hobbies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HobbiesUpdateInput, HobbiesUncheckedUpdateInput>
  }

  /**
   * Hobbies delete
   */
  export type HobbiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
    /**
     * Filter which Hobbies to delete.
     */
    where: HobbiesWhereUniqueInput
  }

  /**
   * Hobbies deleteMany
   */
  export type HobbiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hobbies to delete
     */
    where?: HobbiesWhereInput
  }

  /**
   * Hobbies without action
   */
  export type HobbiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hobbies
     */
    select?: HobbiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HobbiesInclude<ExtArgs> | null
  }


  /**
   * Model AgencyData
   */

  export type AggregateAgencyData = {
    _count: AgencyDataCountAggregateOutputType | null
    _min: AgencyDataMinAggregateOutputType | null
    _max: AgencyDataMaxAggregateOutputType | null
  }

  export type AgencyDataMinAggregateOutputType = {
    id: string | null
    agency_name: string | null
    slug: string | null
    address: string | null
    phone: string | null
    p_iva_c_f: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    about: string | null
    logo: string | null
  }

  export type AgencyDataMaxAggregateOutputType = {
    id: string | null
    agency_name: string | null
    slug: string | null
    address: string | null
    phone: string | null
    p_iva_c_f: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    about: string | null
    logo: string | null
  }

  export type AgencyDataCountAggregateOutputType = {
    id: number
    agency_name: number
    slug: number
    address: number
    phone: number
    p_iva_c_f: number
    createdAt: number
    updatedAt: number
    userId: number
    about: number
    logo: number
    _all: number
  }


  export type AgencyDataMinAggregateInputType = {
    id?: true
    agency_name?: true
    slug?: true
    address?: true
    phone?: true
    p_iva_c_f?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    about?: true
    logo?: true
  }

  export type AgencyDataMaxAggregateInputType = {
    id?: true
    agency_name?: true
    slug?: true
    address?: true
    phone?: true
    p_iva_c_f?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    about?: true
    logo?: true
  }

  export type AgencyDataCountAggregateInputType = {
    id?: true
    agency_name?: true
    slug?: true
    address?: true
    phone?: true
    p_iva_c_f?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    about?: true
    logo?: true
    _all?: true
  }

  export type AgencyDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyData to aggregate.
     */
    where?: AgencyDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyData to fetch.
     */
    orderBy?: AgencyDataOrderByWithRelationInput | AgencyDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgencyData
    **/
    _count?: true | AgencyDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyDataMaxAggregateInputType
  }

  export type GetAgencyDataAggregateType<T extends AgencyDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAgencyData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgencyData[P]>
      : GetScalarType<T[P], AggregateAgencyData[P]>
  }




  export type AgencyDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyDataWhereInput
    orderBy?: AgencyDataOrderByWithAggregationInput | AgencyDataOrderByWithAggregationInput[]
    by: AgencyDataScalarFieldEnum[] | AgencyDataScalarFieldEnum
    having?: AgencyDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyDataCountAggregateInputType | true
    _min?: AgencyDataMinAggregateInputType
    _max?: AgencyDataMaxAggregateInputType
  }

  export type AgencyDataGroupByOutputType = {
    id: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt: Date
    updatedAt: Date
    userId: string
    about: string
    logo: string
    _count: AgencyDataCountAggregateOutputType | null
    _min: AgencyDataMinAggregateOutputType | null
    _max: AgencyDataMaxAggregateOutputType | null
  }

  type GetAgencyDataGroupByPayload<T extends AgencyDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyDataGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyDataGroupByOutputType[P]>
        }
      >
    >


  export type AgencyDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agency_name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    p_iva_c_f?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    about?: boolean
    logo?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | AgencyData$branchArgs<ExtArgs>
    _count?: boolean | AgencyDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyData"]>

  export type AgencyDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agency_name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    p_iva_c_f?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    about?: boolean
    logo?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyData"]>

  export type AgencyDataSelectScalar = {
    id?: boolean
    agency_name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    p_iva_c_f?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    about?: boolean
    logo?: boolean
  }

  export type AgencyDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | AgencyData$branchArgs<ExtArgs>
    _count?: boolean | AgencyDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgencyDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgencyData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agency_name: string
      slug: string
      address: string
      phone: string
      p_iva_c_f: string
      createdAt: Date
      updatedAt: Date
      userId: string
      about: string
      logo: string
    }, ExtArgs["result"]["agencyData"]>
    composites: {}
  }

  type AgencyDataGetPayload<S extends boolean | null | undefined | AgencyDataDefaultArgs> = $Result.GetResult<Prisma.$AgencyDataPayload, S>

  type AgencyDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgencyDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgencyDataCountAggregateInputType | true
    }

  export interface AgencyDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgencyData'], meta: { name: 'AgencyData' } }
    /**
     * Find zero or one AgencyData that matches the filter.
     * @param {AgencyDataFindUniqueArgs} args - Arguments to find a AgencyData
     * @example
     * // Get one AgencyData
     * const agencyData = await prisma.agencyData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyDataFindUniqueArgs>(args: SelectSubset<T, AgencyDataFindUniqueArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgencyData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgencyDataFindUniqueOrThrowArgs} args - Arguments to find a AgencyData
     * @example
     * // Get one AgencyData
     * const agencyData = await prisma.agencyData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgencyData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataFindFirstArgs} args - Arguments to find a AgencyData
     * @example
     * // Get one AgencyData
     * const agencyData = await prisma.agencyData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyDataFindFirstArgs>(args?: SelectSubset<T, AgencyDataFindFirstArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgencyData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataFindFirstOrThrowArgs} args - Arguments to find a AgencyData
     * @example
     * // Get one AgencyData
     * const agencyData = await prisma.agencyData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgencyData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgencyData
     * const agencyData = await prisma.agencyData.findMany()
     * 
     * // Get first 10 AgencyData
     * const agencyData = await prisma.agencyData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyDataWithIdOnly = await prisma.agencyData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyDataFindManyArgs>(args?: SelectSubset<T, AgencyDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgencyData.
     * @param {AgencyDataCreateArgs} args - Arguments to create a AgencyData.
     * @example
     * // Create one AgencyData
     * const AgencyData = await prisma.agencyData.create({
     *   data: {
     *     // ... data to create a AgencyData
     *   }
     * })
     * 
     */
    create<T extends AgencyDataCreateArgs>(args: SelectSubset<T, AgencyDataCreateArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgencyData.
     * @param {AgencyDataCreateManyArgs} args - Arguments to create many AgencyData.
     * @example
     * // Create many AgencyData
     * const agencyData = await prisma.agencyData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyDataCreateManyArgs>(args?: SelectSubset<T, AgencyDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgencyData and returns the data saved in the database.
     * @param {AgencyDataCreateManyAndReturnArgs} args - Arguments to create many AgencyData.
     * @example
     * // Create many AgencyData
     * const agencyData = await prisma.agencyData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgencyData and only return the `id`
     * const agencyDataWithIdOnly = await prisma.agencyData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgencyData.
     * @param {AgencyDataDeleteArgs} args - Arguments to delete one AgencyData.
     * @example
     * // Delete one AgencyData
     * const AgencyData = await prisma.agencyData.delete({
     *   where: {
     *     // ... filter to delete one AgencyData
     *   }
     * })
     * 
     */
    delete<T extends AgencyDataDeleteArgs>(args: SelectSubset<T, AgencyDataDeleteArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgencyData.
     * @param {AgencyDataUpdateArgs} args - Arguments to update one AgencyData.
     * @example
     * // Update one AgencyData
     * const agencyData = await prisma.agencyData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyDataUpdateArgs>(args: SelectSubset<T, AgencyDataUpdateArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgencyData.
     * @param {AgencyDataDeleteManyArgs} args - Arguments to filter AgencyData to delete.
     * @example
     * // Delete a few AgencyData
     * const { count } = await prisma.agencyData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDataDeleteManyArgs>(args?: SelectSubset<T, AgencyDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgencyData
     * const agencyData = await prisma.agencyData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyDataUpdateManyArgs>(args: SelectSubset<T, AgencyDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgencyData.
     * @param {AgencyDataUpsertArgs} args - Arguments to update or create a AgencyData.
     * @example
     * // Update or create a AgencyData
     * const agencyData = await prisma.agencyData.upsert({
     *   create: {
     *     // ... data to create a AgencyData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgencyData we want to update
     *   }
     * })
     */
    upsert<T extends AgencyDataUpsertArgs>(args: SelectSubset<T, AgencyDataUpsertArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgencyData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataCountArgs} args - Arguments to filter AgencyData to count.
     * @example
     * // Count the number of AgencyData
     * const count = await prisma.agencyData.count({
     *   where: {
     *     // ... the filter for the AgencyData we want to count
     *   }
     * })
    **/
    count<T extends AgencyDataCountArgs>(
      args?: Subset<T, AgencyDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgencyData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencyDataAggregateArgs>(args: Subset<T, AgencyDataAggregateArgs>): Prisma.PrismaPromise<GetAgencyDataAggregateType<T>>

    /**
     * Group by AgencyData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencyDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyDataGroupByArgs['orderBy'] }
        : { orderBy?: AgencyDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencyDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgencyData model
   */
  readonly fields: AgencyDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgencyData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    branch<T extends AgencyData$branchArgs<ExtArgs> = {}>(args?: Subset<T, AgencyData$branchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgencyData model
   */ 
  interface AgencyDataFieldRefs {
    readonly id: FieldRef<"AgencyData", 'String'>
    readonly agency_name: FieldRef<"AgencyData", 'String'>
    readonly slug: FieldRef<"AgencyData", 'String'>
    readonly address: FieldRef<"AgencyData", 'String'>
    readonly phone: FieldRef<"AgencyData", 'String'>
    readonly p_iva_c_f: FieldRef<"AgencyData", 'String'>
    readonly createdAt: FieldRef<"AgencyData", 'DateTime'>
    readonly updatedAt: FieldRef<"AgencyData", 'DateTime'>
    readonly userId: FieldRef<"AgencyData", 'String'>
    readonly about: FieldRef<"AgencyData", 'String'>
    readonly logo: FieldRef<"AgencyData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgencyData findUnique
   */
  export type AgencyDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter, which AgencyData to fetch.
     */
    where: AgencyDataWhereUniqueInput
  }

  /**
   * AgencyData findUniqueOrThrow
   */
  export type AgencyDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter, which AgencyData to fetch.
     */
    where: AgencyDataWhereUniqueInput
  }

  /**
   * AgencyData findFirst
   */
  export type AgencyDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter, which AgencyData to fetch.
     */
    where?: AgencyDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyData to fetch.
     */
    orderBy?: AgencyDataOrderByWithRelationInput | AgencyDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyData.
     */
    cursor?: AgencyDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyData.
     */
    distinct?: AgencyDataScalarFieldEnum | AgencyDataScalarFieldEnum[]
  }

  /**
   * AgencyData findFirstOrThrow
   */
  export type AgencyDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter, which AgencyData to fetch.
     */
    where?: AgencyDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyData to fetch.
     */
    orderBy?: AgencyDataOrderByWithRelationInput | AgencyDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyData.
     */
    cursor?: AgencyDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyData.
     */
    distinct?: AgencyDataScalarFieldEnum | AgencyDataScalarFieldEnum[]
  }

  /**
   * AgencyData findMany
   */
  export type AgencyDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter, which AgencyData to fetch.
     */
    where?: AgencyDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyData to fetch.
     */
    orderBy?: AgencyDataOrderByWithRelationInput | AgencyDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgencyData.
     */
    cursor?: AgencyDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyData.
     */
    skip?: number
    distinct?: AgencyDataScalarFieldEnum | AgencyDataScalarFieldEnum[]
  }

  /**
   * AgencyData create
   */
  export type AgencyDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * The data needed to create a AgencyData.
     */
    data: XOR<AgencyDataCreateInput, AgencyDataUncheckedCreateInput>
  }

  /**
   * AgencyData createMany
   */
  export type AgencyDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgencyData.
     */
    data: AgencyDataCreateManyInput | AgencyDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgencyData createManyAndReturn
   */
  export type AgencyDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgencyData.
     */
    data: AgencyDataCreateManyInput | AgencyDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyData update
   */
  export type AgencyDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * The data needed to update a AgencyData.
     */
    data: XOR<AgencyDataUpdateInput, AgencyDataUncheckedUpdateInput>
    /**
     * Choose, which AgencyData to update.
     */
    where: AgencyDataWhereUniqueInput
  }

  /**
   * AgencyData updateMany
   */
  export type AgencyDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgencyData.
     */
    data: XOR<AgencyDataUpdateManyMutationInput, AgencyDataUncheckedUpdateManyInput>
    /**
     * Filter which AgencyData to update
     */
    where?: AgencyDataWhereInput
  }

  /**
   * AgencyData upsert
   */
  export type AgencyDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * The filter to search for the AgencyData to update in case it exists.
     */
    where: AgencyDataWhereUniqueInput
    /**
     * In case the AgencyData found by the `where` argument doesn't exist, create a new AgencyData with this data.
     */
    create: XOR<AgencyDataCreateInput, AgencyDataUncheckedCreateInput>
    /**
     * In case the AgencyData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyDataUpdateInput, AgencyDataUncheckedUpdateInput>
  }

  /**
   * AgencyData delete
   */
  export type AgencyDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
    /**
     * Filter which AgencyData to delete.
     */
    where: AgencyDataWhereUniqueInput
  }

  /**
   * AgencyData deleteMany
   */
  export type AgencyDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyData to delete
     */
    where?: AgencyDataWhereInput
  }

  /**
   * AgencyData.branch
   */
  export type AgencyData$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * AgencyData without action
   */
  export type AgencyDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyData
     */
    select?: AgencyDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyDataInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    fax: string | null
    location: string | null
    logo: string | null
    adId: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    fax: string | null
    location: string | null
    logo: string | null
    adId: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    fax: number
    location: number
    logo: number
    adId: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fax?: true
    location?: true
    logo?: true
    adId?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fax?: true
    location?: true
    logo?: true
    adId?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fax?: true
    location?: true
    logo?: true
    adId?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    fax: string | null
    location: string
    logo: string | null
    adId: string
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fax?: boolean
    location?: boolean
    logo?: boolean
    adId?: boolean
    agency?: boolean | AgencyDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fax?: boolean
    location?: boolean
    logo?: boolean
    adId?: boolean
    agency?: boolean | AgencyDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fax?: boolean
    location?: boolean
    logo?: boolean
    adId?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDataDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDataDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      agency: Prisma.$AgencyDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      fax: string | null
      location: string
      logo: string | null
      adId: string
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDataDefaultArgs<ExtArgs>>): Prisma__AgencyDataClient<$Result.GetResult<Prisma.$AgencyDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly email: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly fax: FieldRef<"Branch", 'String'>
    readonly location: FieldRef<"Branch", 'String'>
    readonly logo: FieldRef<"Branch", 'String'>
    readonly adId: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model AuthAccount
   */

  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountAvgAggregateOutputType = {
    expiresAt: number | null
  }

  export type AuthAccountSumAggregateOutputType = {
    expiresAt: number | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: string | null
    type: string | null
    provide: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: string | null
    type: string | null
    provide: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    type: number
    provide: number
    refreshToken: number
    accessToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AuthAccountAvgAggregateInputType = {
    expiresAt?: true
  }

  export type AuthAccountSumAggregateInputType = {
    expiresAt?: true
  }

  export type AuthAccountMinAggregateInputType = {
    id?: true
    type?: true
    provide?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    type?: true
    provide?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    type?: true
    provide?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccount to aggregate.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type AuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithAggregationInput | AuthAccountOrderByWithAggregationInput[]
    by: AuthAccountScalarFieldEnum[] | AuthAccountScalarFieldEnum
    having?: AuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _avg?: AuthAccountAvgAggregateInputType
    _sum?: AuthAccountSumAggregateInputType
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }

  export type AuthAccountGroupByOutputType = {
    id: string
    type: string
    provide: string
    refreshToken: string | null
    accessToken: string | null
    expiresAt: number
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends AuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type AuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provide?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | AuthAccount$userArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    provide?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | AuthAccount$userArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectScalar = {
    id?: boolean
    type?: boolean
    provide?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type AuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthAccount$userArgs<ExtArgs>
  }
  export type AuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthAccount$userArgs<ExtArgs>
  }

  export type $AuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      provide: string
      refreshToken: string | null
      accessToken: string | null
      expiresAt: number
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["authAccount"]>
    composites: {}
  }

  type AuthAccountGetPayload<S extends boolean | null | undefined | AuthAccountDefaultArgs> = $Result.GetResult<Prisma.$AuthAccountPayload, S>

  type AuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthAccountCountAggregateInputType | true
    }

  export interface AuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthAccount'], meta: { name: 'AuthAccount' } }
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {AuthAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthAccountFindUniqueArgs>(args: SelectSubset<T, AuthAccountFindUniqueArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuthAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthAccountFindUniqueOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthAccountFindFirstArgs>(args?: SelectSubset<T, AuthAccountFindFirstArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthAccountFindManyArgs>(args?: SelectSubset<T, AuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuthAccount.
     * @param {AuthAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
     */
    create<T extends AuthAccountCreateArgs>(args: SelectSubset<T, AuthAccountCreateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuthAccounts.
     * @param {AuthAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthAccountCreateManyArgs>(args?: SelectSubset<T, AuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthAccounts and returns the data saved in the database.
     * @param {AuthAccountCreateManyAndReturnArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuthAccount.
     * @param {AuthAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
     */
    delete<T extends AuthAccountDeleteArgs>(args: SelectSubset<T, AuthAccountDeleteArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuthAccount.
     * @param {AuthAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthAccountUpdateArgs>(args: SelectSubset<T, AuthAccountUpdateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuthAccounts.
     * @param {AuthAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthAccountDeleteManyArgs>(args?: SelectSubset<T, AuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthAccountUpdateManyArgs>(args: SelectSubset<T, AuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthAccount.
     * @param {AuthAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends AuthAccountUpsertArgs>(args: SelectSubset<T, AuthAccountUpsertArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends AuthAccountCountArgs>(
      args?: Subset<T, AuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): Prisma.PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: AuthAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthAccount model
   */
  readonly fields: AuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuthAccount$userArgs<ExtArgs> = {}>(args?: Subset<T, AuthAccount$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthAccount model
   */ 
  interface AuthAccountFieldRefs {
    readonly id: FieldRef<"AuthAccount", 'String'>
    readonly type: FieldRef<"AuthAccount", 'String'>
    readonly provide: FieldRef<"AuthAccount", 'String'>
    readonly refreshToken: FieldRef<"AuthAccount", 'String'>
    readonly accessToken: FieldRef<"AuthAccount", 'String'>
    readonly expiresAt: FieldRef<"AuthAccount", 'Int'>
    readonly createdAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly userId: FieldRef<"AuthAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthAccount findUnique
   */
  export type AuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findUniqueOrThrow
   */
  export type AuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findFirst
   */
  export type AuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findFirstOrThrow
   */
  export type AuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findMany
   */
  export type AuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccounts to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount create
   */
  export type AuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthAccount.
     */
    data: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
  }

  /**
   * AuthAccount createMany
   */
  export type AuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthAccount createManyAndReturn
   */
  export type AuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount update
   */
  export type AuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthAccount.
     */
    data: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
    /**
     * Choose, which AuthAccount to update.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount updateMany
   */
  export type AuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
  }

  /**
   * AuthAccount upsert
   */
  export type AuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthAccount to update in case it exists.
     */
    where: AuthAccountWhereUniqueInput
    /**
     * In case the AuthAccount found by the `where` argument doesn't exist, create a new AuthAccount with this data.
     */
    create: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
    /**
     * In case the AuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
  }

  /**
   * AuthAccount delete
   */
  export type AuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter which AuthAccount to delete.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount deleteMany
   */
  export type AuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccounts to delete
     */
    where?: AuthAccountWhereInput
  }

  /**
   * AuthAccount.user
   */
  export type AuthAccount$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuthAccount without action
   */
  export type AuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    createdAt: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date
    createdAt: Date
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }


  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      type: $Enums.TokenType
      expiresIn: Date
      createdAt: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */ 
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'String'>
    readonly email: FieldRef<"Tokens", 'String'>
    readonly token: FieldRef<"Tokens", 'String'>
    readonly type: FieldRef<"Tokens", 'TokenType'>
    readonly expiresIn: FieldRef<"Tokens", 'DateTime'>
    readonly createdAt: FieldRef<"Tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidatDataScalarFieldEnum: {
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

  export type CandidatDataScalarFieldEnum = (typeof CandidatDataScalarFieldEnum)[keyof typeof CandidatDataScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    degree: 'degree',
    school: 'school',
    grade: 'grade',
    startdate: 'startdate',
    enddate: 'enddate',
    description: 'description',
    cdId: 'cdId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    skill: 'skill',
    level: 'level',
    cdId: 'cdId'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
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

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    id: 'id',
    language: 'language',
    level: 'level',
    cdId: 'cdId'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    course: 'course',
    institution: 'institution',
    grade: 'grade',
    startdate: 'startdate',
    enddate: 'enddate',
    cdId: 'cdId'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const HobbiesScalarFieldEnum: {
    id: 'id',
    hobbie: 'hobbie',
    cdId: 'cdId'
  };

  export type HobbiesScalarFieldEnum = (typeof HobbiesScalarFieldEnum)[keyof typeof HobbiesScalarFieldEnum]


  export const AgencyDataScalarFieldEnum: {
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

  export type AgencyDataScalarFieldEnum = (typeof AgencyDataScalarFieldEnum)[keyof typeof AgencyDataScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    fax: 'fax',
    location: 'location',
    logo: 'logo',
    adId: 'adId'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
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

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthMethod'
   */
  export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>
    


  /**
   * Reference to a field of type 'AuthMethod[]'
   */
  export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SkillsLevel'
   */
  export type EnumSkillsLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillsLevel'>
    


  /**
   * Reference to a field of type 'SkillsLevel[]'
   */
  export type ListEnumSkillsLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillsLevel[]'>
    


  /**
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'ContractType[]'
   */
  export type ListEnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType[]'>
    


  /**
   * Reference to a field of type 'LanguageLevel'
   */
  export type EnumLanguageLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageLevel'>
    


  /**
   * Reference to a field of type 'LanguageLevel[]'
   */
  export type ListEnumLanguageLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authAccounts?: AuthAccountListRelationFilter
    agencydata?: XOR<AgencyDataNullableRelationFilter, AgencyDataWhereInput> | null
    candidatdata?: XOR<CandidatDataNullableRelationFilter, CandidatDataWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authAccounts?: AuthAccountOrderByRelationAggregateInput
    agencydata?: AgencyDataOrderByWithRelationInput
    candidatdata?: CandidatDataOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authAccounts?: AuthAccountListRelationFilter
    agencydata?: XOR<AgencyDataNullableRelationFilter, AgencyDataWhereInput> | null
    candidatdata?: XOR<CandidatDataNullableRelationFilter, CandidatDataWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    method?: EnumAuthMethodWithAggregatesFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CandidatDataWhereInput = {
    AND?: CandidatDataWhereInput | CandidatDataWhereInput[]
    OR?: CandidatDataWhereInput[]
    NOT?: CandidatDataWhereInput | CandidatDataWhereInput[]
    id?: StringFilter<"CandidatData"> | string
    firstname?: StringFilter<"CandidatData"> | string
    surname?: StringFilter<"CandidatData"> | string
    birthday?: StringFilter<"CandidatData"> | string
    phone?: StringFilter<"CandidatData"> | string
    resident?: StringFilter<"CandidatData"> | string
    about_my?: StringFilter<"CandidatData"> | string
    avatar?: StringFilter<"CandidatData"> | string
    createdAt?: DateTimeFilter<"CandidatData"> | Date | string
    updatedAt?: DateTimeFilter<"CandidatData"> | Date | string
    userId?: StringFilter<"CandidatData"> | string
    courses?: CoursesListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    hobbies?: HobbiesListRelationFilter
    languages?: LanguagesListRelationFilter
    skills?: SkillsListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CandidatDataOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    resident?: SortOrder
    about_my?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    courses?: CoursesOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    experience?: ExperienceOrderByRelationAggregateInput
    hobbies?: HobbiesOrderByRelationAggregateInput
    languages?: LanguagesOrderByRelationAggregateInput
    skills?: SkillsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CandidatDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CandidatDataWhereInput | CandidatDataWhereInput[]
    OR?: CandidatDataWhereInput[]
    NOT?: CandidatDataWhereInput | CandidatDataWhereInput[]
    firstname?: StringFilter<"CandidatData"> | string
    surname?: StringFilter<"CandidatData"> | string
    birthday?: StringFilter<"CandidatData"> | string
    phone?: StringFilter<"CandidatData"> | string
    resident?: StringFilter<"CandidatData"> | string
    about_my?: StringFilter<"CandidatData"> | string
    avatar?: StringFilter<"CandidatData"> | string
    createdAt?: DateTimeFilter<"CandidatData"> | Date | string
    updatedAt?: DateTimeFilter<"CandidatData"> | Date | string
    courses?: CoursesListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    hobbies?: HobbiesListRelationFilter
    languages?: LanguagesListRelationFilter
    skills?: SkillsListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CandidatDataOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    resident?: SortOrder
    about_my?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CandidatDataCountOrderByAggregateInput
    _max?: CandidatDataMaxOrderByAggregateInput
    _min?: CandidatDataMinOrderByAggregateInput
  }

  export type CandidatDataScalarWhereWithAggregatesInput = {
    AND?: CandidatDataScalarWhereWithAggregatesInput | CandidatDataScalarWhereWithAggregatesInput[]
    OR?: CandidatDataScalarWhereWithAggregatesInput[]
    NOT?: CandidatDataScalarWhereWithAggregatesInput | CandidatDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CandidatData"> | string
    firstname?: StringWithAggregatesFilter<"CandidatData"> | string
    surname?: StringWithAggregatesFilter<"CandidatData"> | string
    birthday?: StringWithAggregatesFilter<"CandidatData"> | string
    phone?: StringWithAggregatesFilter<"CandidatData"> | string
    resident?: StringWithAggregatesFilter<"CandidatData"> | string
    about_my?: StringWithAggregatesFilter<"CandidatData"> | string
    avatar?: StringWithAggregatesFilter<"CandidatData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CandidatData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CandidatData"> | Date | string
    userId?: StringWithAggregatesFilter<"CandidatData"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    grade?: StringNullableFilter<"Education"> | string | null
    startdate?: DateTimeFilter<"Education"> | Date | string
    enddate?: DateTimeFilter<"Education"> | Date | string
    description?: StringNullableFilter<"Education"> | string | null
    cdId?: StringFilter<"Education"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    grade?: SortOrderInput | SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    description?: SortOrderInput | SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    degree?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    grade?: StringNullableFilter<"Education"> | string | null
    startdate?: DateTimeFilter<"Education"> | Date | string
    enddate?: DateTimeFilter<"Education"> | Date | string
    description?: StringNullableFilter<"Education"> | string | null
    cdId?: StringFilter<"Education"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    grade?: SortOrderInput | SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    description?: SortOrderInput | SortOrder
    cdId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    school?: StringWithAggregatesFilter<"Education"> | string
    grade?: StringNullableWithAggregatesFilter<"Education"> | string | null
    startdate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    enddate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
    cdId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: StringFilter<"Skills"> | string
    skill?: StringFilter<"Skills"> | string
    level?: EnumSkillsLevelFilter<"Skills"> | $Enums.SkillsLevel
    cdId?: StringFilter<"Skills"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    skill?: StringFilter<"Skills"> | string
    level?: EnumSkillsLevelFilter<"Skills"> | $Enums.SkillsLevel
    cdId?: StringFilter<"Skills"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skills"> | string
    skill?: StringWithAggregatesFilter<"Skills"> | string
    level?: EnumSkillsLevelWithAggregatesFilter<"Skills"> | $Enums.SkillsLevel
    cdId?: StringWithAggregatesFilter<"Skills"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    contract?: EnumContractTypeFilter<"Experience"> | $Enums.ContractType
    location?: StringNullableFilter<"Experience"> | string | null
    currently?: BoolFilter<"Experience"> | boolean
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringNullableFilter<"Experience"> | string | null
    cdId?: StringFilter<"Experience"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    contract?: SortOrder
    location?: SortOrderInput | SortOrder
    currently?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrderInput | SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    company?: StringFilter<"Experience"> | string
    contract?: EnumContractTypeFilter<"Experience"> | $Enums.ContractType
    location?: StringNullableFilter<"Experience"> | string | null
    currently?: BoolFilter<"Experience"> | boolean
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringNullableFilter<"Experience"> | string | null
    cdId?: StringFilter<"Experience"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    contract?: SortOrder
    location?: SortOrderInput | SortOrder
    currently?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrderInput | SortOrder
    cdId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    contract?: EnumContractTypeWithAggregatesFilter<"Experience"> | $Enums.ContractType
    location?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    currently?: BoolWithAggregatesFilter<"Experience"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    cdId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type LanguagesWhereInput = {
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    id?: StringFilter<"Languages"> | string
    language?: StringFilter<"Languages"> | string
    level?: EnumLanguageLevelFilter<"Languages"> | $Enums.LanguageLevel
    cdId?: StringFilter<"Languages"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type LanguagesOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type LanguagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    language?: StringFilter<"Languages"> | string
    level?: EnumLanguageLevelFilter<"Languages"> | $Enums.LanguageLevel
    cdId?: StringFilter<"Languages"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type LanguagesOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
    _count?: LanguagesCountOrderByAggregateInput
    _max?: LanguagesMaxOrderByAggregateInput
    _min?: LanguagesMinOrderByAggregateInput
  }

  export type LanguagesScalarWhereWithAggregatesInput = {
    AND?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    OR?: LanguagesScalarWhereWithAggregatesInput[]
    NOT?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Languages"> | string
    language?: StringWithAggregatesFilter<"Languages"> | string
    level?: EnumLanguageLevelWithAggregatesFilter<"Languages"> | $Enums.LanguageLevel
    cdId?: StringWithAggregatesFilter<"Languages"> | string
  }

  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: StringFilter<"Courses"> | string
    course?: StringFilter<"Courses"> | string
    institution?: StringFilter<"Courses"> | string
    grade?: StringFilter<"Courses"> | string
    startdate?: DateTimeFilter<"Courses"> | Date | string
    enddate?: DateTimeFilter<"Courses"> | Date | string
    cdId?: StringFilter<"Courses"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    course?: SortOrder
    institution?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    course?: StringFilter<"Courses"> | string
    institution?: StringFilter<"Courses"> | string
    grade?: StringFilter<"Courses"> | string
    startdate?: DateTimeFilter<"Courses"> | Date | string
    enddate?: DateTimeFilter<"Courses"> | Date | string
    cdId?: StringFilter<"Courses"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    course?: SortOrder
    institution?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    cdId?: SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courses"> | string
    course?: StringWithAggregatesFilter<"Courses"> | string
    institution?: StringWithAggregatesFilter<"Courses"> | string
    grade?: StringWithAggregatesFilter<"Courses"> | string
    startdate?: DateTimeWithAggregatesFilter<"Courses"> | Date | string
    enddate?: DateTimeWithAggregatesFilter<"Courses"> | Date | string
    cdId?: StringWithAggregatesFilter<"Courses"> | string
  }

  export type HobbiesWhereInput = {
    AND?: HobbiesWhereInput | HobbiesWhereInput[]
    OR?: HobbiesWhereInput[]
    NOT?: HobbiesWhereInput | HobbiesWhereInput[]
    id?: StringFilter<"Hobbies"> | string
    hobbie?: StringFilter<"Hobbies"> | string
    cdId?: StringFilter<"Hobbies"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }

  export type HobbiesOrderByWithRelationInput = {
    id?: SortOrder
    hobbie?: SortOrder
    cdId?: SortOrder
    candidate?: CandidatDataOrderByWithRelationInput
  }

  export type HobbiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HobbiesWhereInput | HobbiesWhereInput[]
    OR?: HobbiesWhereInput[]
    NOT?: HobbiesWhereInput | HobbiesWhereInput[]
    hobbie?: StringFilter<"Hobbies"> | string
    cdId?: StringFilter<"Hobbies"> | string
    candidate?: XOR<CandidatDataRelationFilter, CandidatDataWhereInput>
  }, "id">

  export type HobbiesOrderByWithAggregationInput = {
    id?: SortOrder
    hobbie?: SortOrder
    cdId?: SortOrder
    _count?: HobbiesCountOrderByAggregateInput
    _max?: HobbiesMaxOrderByAggregateInput
    _min?: HobbiesMinOrderByAggregateInput
  }

  export type HobbiesScalarWhereWithAggregatesInput = {
    AND?: HobbiesScalarWhereWithAggregatesInput | HobbiesScalarWhereWithAggregatesInput[]
    OR?: HobbiesScalarWhereWithAggregatesInput[]
    NOT?: HobbiesScalarWhereWithAggregatesInput | HobbiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hobbies"> | string
    hobbie?: StringWithAggregatesFilter<"Hobbies"> | string
    cdId?: StringWithAggregatesFilter<"Hobbies"> | string
  }

  export type AgencyDataWhereInput = {
    AND?: AgencyDataWhereInput | AgencyDataWhereInput[]
    OR?: AgencyDataWhereInput[]
    NOT?: AgencyDataWhereInput | AgencyDataWhereInput[]
    id?: StringFilter<"AgencyData"> | string
    agency_name?: StringFilter<"AgencyData"> | string
    slug?: StringFilter<"AgencyData"> | string
    address?: StringFilter<"AgencyData"> | string
    phone?: StringFilter<"AgencyData"> | string
    p_iva_c_f?: StringFilter<"AgencyData"> | string
    createdAt?: DateTimeFilter<"AgencyData"> | Date | string
    updatedAt?: DateTimeFilter<"AgencyData"> | Date | string
    userId?: StringFilter<"AgencyData"> | string
    about?: StringFilter<"AgencyData"> | string
    logo?: StringFilter<"AgencyData"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    branch?: BranchListRelationFilter
  }

  export type AgencyDataOrderByWithRelationInput = {
    id?: SortOrder
    agency_name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    p_iva_c_f?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    user?: UserOrderByWithRelationInput
    branch?: BranchOrderByRelationAggregateInput
  }

  export type AgencyDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    userId?: string
    AND?: AgencyDataWhereInput | AgencyDataWhereInput[]
    OR?: AgencyDataWhereInput[]
    NOT?: AgencyDataWhereInput | AgencyDataWhereInput[]
    agency_name?: StringFilter<"AgencyData"> | string
    address?: StringFilter<"AgencyData"> | string
    phone?: StringFilter<"AgencyData"> | string
    p_iva_c_f?: StringFilter<"AgencyData"> | string
    createdAt?: DateTimeFilter<"AgencyData"> | Date | string
    updatedAt?: DateTimeFilter<"AgencyData"> | Date | string
    about?: StringFilter<"AgencyData"> | string
    logo?: StringFilter<"AgencyData"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    branch?: BranchListRelationFilter
  }, "id" | "slug" | "userId">

  export type AgencyDataOrderByWithAggregationInput = {
    id?: SortOrder
    agency_name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    p_iva_c_f?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    about?: SortOrder
    logo?: SortOrder
    _count?: AgencyDataCountOrderByAggregateInput
    _max?: AgencyDataMaxOrderByAggregateInput
    _min?: AgencyDataMinOrderByAggregateInput
  }

  export type AgencyDataScalarWhereWithAggregatesInput = {
    AND?: AgencyDataScalarWhereWithAggregatesInput | AgencyDataScalarWhereWithAggregatesInput[]
    OR?: AgencyDataScalarWhereWithAggregatesInput[]
    NOT?: AgencyDataScalarWhereWithAggregatesInput | AgencyDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgencyData"> | string
    agency_name?: StringWithAggregatesFilter<"AgencyData"> | string
    slug?: StringWithAggregatesFilter<"AgencyData"> | string
    address?: StringWithAggregatesFilter<"AgencyData"> | string
    phone?: StringWithAggregatesFilter<"AgencyData"> | string
    p_iva_c_f?: StringWithAggregatesFilter<"AgencyData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgencyData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgencyData"> | Date | string
    userId?: StringWithAggregatesFilter<"AgencyData"> | string
    about?: StringWithAggregatesFilter<"AgencyData"> | string
    logo?: StringWithAggregatesFilter<"AgencyData"> | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    email?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    fax?: StringNullableFilter<"Branch"> | string | null
    location?: StringFilter<"Branch"> | string
    logo?: StringNullableFilter<"Branch"> | string | null
    adId?: StringFilter<"Branch"> | string
    agency?: XOR<AgencyDataRelationFilter, AgencyDataWhereInput>
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fax?: SortOrderInput | SortOrder
    location?: SortOrder
    logo?: SortOrderInput | SortOrder
    adId?: SortOrder
    agency?: AgencyDataOrderByWithRelationInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    email?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    fax?: StringNullableFilter<"Branch"> | string | null
    location?: StringFilter<"Branch"> | string
    logo?: StringNullableFilter<"Branch"> | string | null
    adId?: StringFilter<"Branch"> | string
    agency?: XOR<AgencyDataRelationFilter, AgencyDataWhereInput>
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fax?: SortOrderInput | SortOrder
    location?: SortOrder
    logo?: SortOrderInput | SortOrder
    adId?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    email?: StringWithAggregatesFilter<"Branch"> | string
    phone?: StringWithAggregatesFilter<"Branch"> | string
    fax?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    location?: StringWithAggregatesFilter<"Branch"> | string
    logo?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    adId?: StringWithAggregatesFilter<"Branch"> | string
  }

  export type AuthAccountWhereInput = {
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    type?: StringFilter<"AuthAccount"> | string
    provide?: StringFilter<"AuthAccount"> | string
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    expiresAt?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    userId?: StringNullableFilter<"AuthAccount"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    provide?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    type?: StringFilter<"AuthAccount"> | string
    provide?: StringFilter<"AuthAccount"> | string
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    expiresAt?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    userId?: StringNullableFilter<"AuthAccount"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    provide?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AuthAccountCountOrderByAggregateInput
    _avg?: AuthAccountAvgOrderByAggregateInput
    _max?: AuthAccountMaxOrderByAggregateInput
    _min?: AuthAccountMinOrderByAggregateInput
    _sum?: AuthAccountSumOrderByAggregateInput
  }

  export type AuthAccountScalarWhereWithAggregatesInput = {
    AND?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    OR?: AuthAccountScalarWhereWithAggregatesInput[]
    NOT?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthAccount"> | string
    type?: StringWithAggregatesFilter<"AuthAccount"> | string
    provide?: StringWithAggregatesFilter<"AuthAccount"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    expiresAt?: IntWithAggregatesFilter<"AuthAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: StringFilter<"Tokens"> | string
    email?: StringFilter<"Tokens"> | string
    token?: StringFilter<"Tokens"> | string
    type?: EnumTokenTypeFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Tokens"> | Date | string
    createdAt?: DateTimeFilter<"Tokens"> | Date | string
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    email?: StringFilter<"Tokens"> | string
    type?: EnumTokenTypeFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Tokens"> | Date | string
    createdAt?: DateTimeFilter<"Tokens"> | Date | string
  }, "id" | "token">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tokens"> | string
    email?: StringWithAggregatesFilter<"Tokens"> | string
    token?: StringWithAggregatesFilter<"Tokens"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Tokens"> | $Enums.TokenType
    expiresIn?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    agencydata?: AgencyDataCreateNestedOneWithoutUserInput
    candidatdata?: CandidatDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    agencydata?: AgencyDataUncheckedCreateNestedOneWithoutUserInput
    candidatdata?: CandidatDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    agencydata?: AgencyDataUpdateOneWithoutUserNestedInput
    candidatdata?: CandidatDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    agencydata?: AgencyDataUncheckedUpdateOneWithoutUserNestedInput
    candidatdata?: CandidatDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatDataCreateInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateManyInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CandidatDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
    candidate: CandidatDataCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
    cdId: string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    candidate?: CandidatDataUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
    cdId: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsCreateInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
    candidate: CandidatDataCreateNestedOneWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
    cdId: string
  }

  export type SkillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
    candidate?: CandidatDataUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillsCreateManyInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
    cdId: string
  }

  export type SkillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    candidate: CandidatDataCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    cdId: string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    candidate?: CandidatDataUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
    cdId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesCreateInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
    candidate: CandidatDataCreateNestedOneWithoutLanguagesInput
  }

  export type LanguagesUncheckedCreateInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
    cdId: string
  }

  export type LanguagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
    candidate?: CandidatDataUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesCreateManyInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
    cdId: string
  }

  export type LanguagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
  }

  export type LanguagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursesCreateInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
    candidate: CandidatDataCreateNestedOneWithoutCoursesInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
    cdId: string
  }

  export type CoursesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidatDataUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursesCreateManyInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
    cdId: string
  }

  export type CoursesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type HobbiesCreateInput = {
    id?: string
    hobbie: string
    candidate: CandidatDataCreateNestedOneWithoutHobbiesInput
  }

  export type HobbiesUncheckedCreateInput = {
    id?: string
    hobbie: string
    cdId: string
  }

  export type HobbiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
    candidate?: CandidatDataUpdateOneRequiredWithoutHobbiesNestedInput
  }

  export type HobbiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type HobbiesCreateManyInput = {
    id?: string
    hobbie: string
    cdId: string
  }

  export type HobbiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
  }

  export type HobbiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
    cdId?: StringFieldUpdateOperationsInput | string
  }

  export type AgencyDataCreateInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    about: string
    logo: string
    user: UserCreateNestedOneWithoutAgencydataInput
    branch?: BranchCreateNestedManyWithoutAgencyInput
  }

  export type AgencyDataUncheckedCreateInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    about: string
    logo: string
    branch?: BranchUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAgencydataNestedInput
    branch?: BranchUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyDataCreateManyInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    about: string
    logo: string
  }

  export type AgencyDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type AgencyDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
    agency: AgencyDataCreateNestedOneWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
    adId: string
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: AgencyDataUpdateOneRequiredWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: StringFieldUpdateOperationsInput | string
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
    adId: string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthAccountCreateInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAuthAccountsInput
  }

  export type AuthAccountUncheckedCreateInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuthAccountsNestedInput
  }

  export type AuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthAccountCreateManyInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokensCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokensUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateManyInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthAccountListRelationFilter = {
    every?: AuthAccountWhereInput
    some?: AuthAccountWhereInput
    none?: AuthAccountWhereInput
  }

  export type AgencyDataNullableRelationFilter = {
    is?: AgencyDataWhereInput | null
    isNot?: AgencyDataWhereInput | null
  }

  export type CandidatDataNullableRelationFilter = {
    is?: CandidatDataWhereInput | null
    isNot?: CandidatDataWhereInput | null
  }

  export type AuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CoursesListRelationFilter = {
    every?: CoursesWhereInput
    some?: CoursesWhereInput
    none?: CoursesWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type HobbiesListRelationFilter = {
    every?: HobbiesWhereInput
    some?: HobbiesWhereInput
    none?: HobbiesWhereInput
  }

  export type LanguagesListRelationFilter = {
    every?: LanguagesWhereInput
    some?: LanguagesWhereInput
    none?: LanguagesWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: SkillsWhereInput
    some?: SkillsWhereInput
    none?: SkillsWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CoursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HobbiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidatDataCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    resident?: SortOrder
    about_my?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CandidatDataMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    resident?: SortOrder
    about_my?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CandidatDataMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    surname?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    resident?: SortOrder
    about_my?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CandidatDataRelationFilter = {
    is?: CandidatDataWhereInput
    isNot?: CandidatDataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    degree?: SortOrder
    school?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSkillsLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillsLevel | EnumSkillsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsLevelFilter<$PrismaModel> | $Enums.SkillsLevel
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type EnumSkillsLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillsLevel | EnumSkillsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillsLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillsLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillsLevelFilter<$PrismaModel>
  }

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contract?: SortOrder
    location?: SortOrder
    currently?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contract?: SortOrder
    location?: SortOrder
    currently?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contract?: SortOrder
    location?: SortOrder
    currently?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cdId?: SortOrder
  }

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type EnumLanguageLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageLevel | EnumLanguageLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageLevelFilter<$PrismaModel> | $Enums.LanguageLevel
  }

  export type LanguagesCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type LanguagesMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type LanguagesMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    level?: SortOrder
    cdId?: SortOrder
  }

  export type EnumLanguageLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageLevel | EnumLanguageLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageLevelWithAggregatesFilter<$PrismaModel> | $Enums.LanguageLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageLevelFilter<$PrismaModel>
    _max?: NestedEnumLanguageLevelFilter<$PrismaModel>
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    institution?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    cdId?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    institution?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    cdId?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    course?: SortOrder
    institution?: SortOrder
    grade?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    cdId?: SortOrder
  }

  export type HobbiesCountOrderByAggregateInput = {
    id?: SortOrder
    hobbie?: SortOrder
    cdId?: SortOrder
  }

  export type HobbiesMaxOrderByAggregateInput = {
    id?: SortOrder
    hobbie?: SortOrder
    cdId?: SortOrder
  }

  export type HobbiesMinOrderByAggregateInput = {
    id?: SortOrder
    hobbie?: SortOrder
    cdId?: SortOrder
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyDataCountOrderByAggregateInput = {
    id?: SortOrder
    agency_name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    p_iva_c_f?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    about?: SortOrder
    logo?: SortOrder
  }

  export type AgencyDataMaxOrderByAggregateInput = {
    id?: SortOrder
    agency_name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    p_iva_c_f?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    about?: SortOrder
    logo?: SortOrder
  }

  export type AgencyDataMinOrderByAggregateInput = {
    id?: SortOrder
    agency_name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    p_iva_c_f?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    about?: SortOrder
    logo?: SortOrder
  }

  export type AgencyDataRelationFilter = {
    is?: AgencyDataWhereInput
    isNot?: AgencyDataWhereInput
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fax?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    adId?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fax?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    adId?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fax?: SortOrder
    location?: SortOrder
    logo?: SortOrder
    adId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provide?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountAvgOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type AuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provide?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    provide?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountSumOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type AuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AgencyDataCreateNestedOneWithoutUserInput = {
    create?: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutUserInput
    connect?: AgencyDataWhereUniqueInput
  }

  export type CandidatDataCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutUserInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type AuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AgencyDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutUserInput
    connect?: AgencyDataWhereUniqueInput
  }

  export type CandidatDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutUserInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AgencyDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutUserInput
    upsert?: AgencyDataUpsertWithoutUserInput
    disconnect?: AgencyDataWhereInput | boolean
    delete?: AgencyDataWhereInput | boolean
    connect?: AgencyDataWhereUniqueInput
    update?: XOR<XOR<AgencyDataUpdateToOneWithWhereWithoutUserInput, AgencyDataUpdateWithoutUserInput>, AgencyDataUncheckedUpdateWithoutUserInput>
  }

  export type CandidatDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutUserInput
    upsert?: CandidatDataUpsertWithoutUserInput
    disconnect?: CandidatDataWhereInput | boolean
    delete?: CandidatDataWhereInput | boolean
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutUserInput, CandidatDataUpdateWithoutUserInput>, CandidatDataUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AgencyDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutUserInput
    upsert?: AgencyDataUpsertWithoutUserInput
    disconnect?: AgencyDataWhereInput | boolean
    delete?: AgencyDataWhereInput | boolean
    connect?: AgencyDataWhereUniqueInput
    update?: XOR<XOR<AgencyDataUpdateToOneWithWhereWithoutUserInput, AgencyDataUpdateWithoutUserInput>, AgencyDataUncheckedUpdateWithoutUserInput>
  }

  export type CandidatDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutUserInput
    upsert?: CandidatDataUpsertWithoutUserInput
    disconnect?: CandidatDataWhereInput | boolean
    delete?: CandidatDataWhereInput | boolean
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutUserInput, CandidatDataUpdateWithoutUserInput>, CandidatDataUncheckedUpdateWithoutUserInput>
  }

  export type CoursesCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput> | CoursesCreateWithoutCandidateInput[] | CoursesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutCandidateInput | CoursesCreateOrConnectWithoutCandidateInput[]
    createMany?: CoursesCreateManyCandidateInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutCandidateInput = {
    create?: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput> | EducationCreateWithoutCandidateInput[] | EducationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateInput | EducationCreateOrConnectWithoutCandidateInput[]
    createMany?: EducationCreateManyCandidateInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput> | ExperienceCreateWithoutCandidateInput[] | ExperienceUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCandidateInput | ExperienceCreateOrConnectWithoutCandidateInput[]
    createMany?: ExperienceCreateManyCandidateInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type HobbiesCreateNestedManyWithoutCandidateInput = {
    create?: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput> | HobbiesCreateWithoutCandidateInput[] | HobbiesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: HobbiesCreateOrConnectWithoutCandidateInput | HobbiesCreateOrConnectWithoutCandidateInput[]
    createMany?: HobbiesCreateManyCandidateInputEnvelope
    connect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
  }

  export type LanguagesCreateNestedManyWithoutCandidateInput = {
    create?: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput> | LanguagesCreateWithoutCandidateInput[] | LanguagesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutCandidateInput | LanguagesCreateOrConnectWithoutCandidateInput[]
    createMany?: LanguagesCreateManyCandidateInputEnvelope
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
  }

  export type SkillsCreateNestedManyWithoutCandidateInput = {
    create?: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput> | SkillsCreateWithoutCandidateInput[] | SkillsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCandidateInput | SkillsCreateOrConnectWithoutCandidateInput[]
    createMany?: SkillsCreateManyCandidateInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCandidatdataInput = {
    create?: XOR<UserCreateWithoutCandidatdataInput, UserUncheckedCreateWithoutCandidatdataInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidatdataInput
    connect?: UserWhereUniqueInput
  }

  export type CoursesUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput> | CoursesCreateWithoutCandidateInput[] | CoursesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutCandidateInput | CoursesCreateOrConnectWithoutCandidateInput[]
    createMany?: CoursesCreateManyCandidateInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput> | EducationCreateWithoutCandidateInput[] | EducationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateInput | EducationCreateOrConnectWithoutCandidateInput[]
    createMany?: EducationCreateManyCandidateInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput> | ExperienceCreateWithoutCandidateInput[] | ExperienceUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCandidateInput | ExperienceCreateOrConnectWithoutCandidateInput[]
    createMany?: ExperienceCreateManyCandidateInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type HobbiesUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput> | HobbiesCreateWithoutCandidateInput[] | HobbiesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: HobbiesCreateOrConnectWithoutCandidateInput | HobbiesCreateOrConnectWithoutCandidateInput[]
    createMany?: HobbiesCreateManyCandidateInputEnvelope
    connect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
  }

  export type LanguagesUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput> | LanguagesCreateWithoutCandidateInput[] | LanguagesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutCandidateInput | LanguagesCreateOrConnectWithoutCandidateInput[]
    createMany?: LanguagesCreateManyCandidateInputEnvelope
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
  }

  export type SkillsUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput> | SkillsCreateWithoutCandidateInput[] | SkillsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCandidateInput | SkillsCreateOrConnectWithoutCandidateInput[]
    createMany?: SkillsCreateManyCandidateInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type CoursesUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput> | CoursesCreateWithoutCandidateInput[] | CoursesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutCandidateInput | CoursesCreateOrConnectWithoutCandidateInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutCandidateInput | CoursesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CoursesCreateManyCandidateInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutCandidateInput | CoursesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutCandidateInput | CoursesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput> | EducationCreateWithoutCandidateInput[] | EducationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateInput | EducationCreateOrConnectWithoutCandidateInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCandidateInput | EducationUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: EducationCreateManyCandidateInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCandidateInput | EducationUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCandidateInput | EducationUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput> | ExperienceCreateWithoutCandidateInput[] | ExperienceUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCandidateInput | ExperienceCreateOrConnectWithoutCandidateInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCandidateInput | ExperienceUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ExperienceCreateManyCandidateInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCandidateInput | ExperienceUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCandidateInput | ExperienceUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type HobbiesUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput> | HobbiesCreateWithoutCandidateInput[] | HobbiesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: HobbiesCreateOrConnectWithoutCandidateInput | HobbiesCreateOrConnectWithoutCandidateInput[]
    upsert?: HobbiesUpsertWithWhereUniqueWithoutCandidateInput | HobbiesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: HobbiesCreateManyCandidateInputEnvelope
    set?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    disconnect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    delete?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    connect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    update?: HobbiesUpdateWithWhereUniqueWithoutCandidateInput | HobbiesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: HobbiesUpdateManyWithWhereWithoutCandidateInput | HobbiesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: HobbiesScalarWhereInput | HobbiesScalarWhereInput[]
  }

  export type LanguagesUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput> | LanguagesCreateWithoutCandidateInput[] | LanguagesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutCandidateInput | LanguagesCreateOrConnectWithoutCandidateInput[]
    upsert?: LanguagesUpsertWithWhereUniqueWithoutCandidateInput | LanguagesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: LanguagesCreateManyCandidateInputEnvelope
    set?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    disconnect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    delete?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    update?: LanguagesUpdateWithWhereUniqueWithoutCandidateInput | LanguagesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: LanguagesUpdateManyWithWhereWithoutCandidateInput | LanguagesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
  }

  export type SkillsUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput> | SkillsCreateWithoutCandidateInput[] | SkillsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCandidateInput | SkillsCreateOrConnectWithoutCandidateInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutCandidateInput | SkillsUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: SkillsCreateManyCandidateInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutCandidateInput | SkillsUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutCandidateInput | SkillsUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCandidatdataNestedInput = {
    create?: XOR<UserCreateWithoutCandidatdataInput, UserUncheckedCreateWithoutCandidatdataInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidatdataInput
    upsert?: UserUpsertWithoutCandidatdataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidatdataInput, UserUpdateWithoutCandidatdataInput>, UserUncheckedUpdateWithoutCandidatdataInput>
  }

  export type CoursesUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput> | CoursesCreateWithoutCandidateInput[] | CoursesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutCandidateInput | CoursesCreateOrConnectWithoutCandidateInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutCandidateInput | CoursesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CoursesCreateManyCandidateInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutCandidateInput | CoursesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutCandidateInput | CoursesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput> | EducationCreateWithoutCandidateInput[] | EducationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateInput | EducationCreateOrConnectWithoutCandidateInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCandidateInput | EducationUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: EducationCreateManyCandidateInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCandidateInput | EducationUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCandidateInput | EducationUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput> | ExperienceCreateWithoutCandidateInput[] | ExperienceUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCandidateInput | ExperienceCreateOrConnectWithoutCandidateInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCandidateInput | ExperienceUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ExperienceCreateManyCandidateInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCandidateInput | ExperienceUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCandidateInput | ExperienceUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type HobbiesUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput> | HobbiesCreateWithoutCandidateInput[] | HobbiesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: HobbiesCreateOrConnectWithoutCandidateInput | HobbiesCreateOrConnectWithoutCandidateInput[]
    upsert?: HobbiesUpsertWithWhereUniqueWithoutCandidateInput | HobbiesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: HobbiesCreateManyCandidateInputEnvelope
    set?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    disconnect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    delete?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    connect?: HobbiesWhereUniqueInput | HobbiesWhereUniqueInput[]
    update?: HobbiesUpdateWithWhereUniqueWithoutCandidateInput | HobbiesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: HobbiesUpdateManyWithWhereWithoutCandidateInput | HobbiesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: HobbiesScalarWhereInput | HobbiesScalarWhereInput[]
  }

  export type LanguagesUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput> | LanguagesCreateWithoutCandidateInput[] | LanguagesUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutCandidateInput | LanguagesCreateOrConnectWithoutCandidateInput[]
    upsert?: LanguagesUpsertWithWhereUniqueWithoutCandidateInput | LanguagesUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: LanguagesCreateManyCandidateInputEnvelope
    set?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    disconnect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    delete?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    update?: LanguagesUpdateWithWhereUniqueWithoutCandidateInput | LanguagesUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: LanguagesUpdateManyWithWhereWithoutCandidateInput | LanguagesUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
  }

  export type SkillsUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput> | SkillsCreateWithoutCandidateInput[] | SkillsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutCandidateInput | SkillsCreateOrConnectWithoutCandidateInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutCandidateInput | SkillsUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: SkillsCreateManyCandidateInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutCandidateInput | SkillsUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutCandidateInput | SkillsUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type CandidatDataCreateNestedOneWithoutEducationInput = {
    create?: XOR<CandidatDataCreateWithoutEducationInput, CandidatDataUncheckedCreateWithoutEducationInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutEducationInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CandidatDataUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<CandidatDataCreateWithoutEducationInput, CandidatDataUncheckedCreateWithoutEducationInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutEducationInput
    upsert?: CandidatDataUpsertWithoutEducationInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutEducationInput, CandidatDataUpdateWithoutEducationInput>, CandidatDataUncheckedUpdateWithoutEducationInput>
  }

  export type CandidatDataCreateNestedOneWithoutSkillsInput = {
    create?: XOR<CandidatDataCreateWithoutSkillsInput, CandidatDataUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutSkillsInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type EnumSkillsLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillsLevel
  }

  export type CandidatDataUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<CandidatDataCreateWithoutSkillsInput, CandidatDataUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutSkillsInput
    upsert?: CandidatDataUpsertWithoutSkillsInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutSkillsInput, CandidatDataUpdateWithoutSkillsInput>, CandidatDataUncheckedUpdateWithoutSkillsInput>
  }

  export type CandidatDataCreateNestedOneWithoutExperienceInput = {
    create?: XOR<CandidatDataCreateWithoutExperienceInput, CandidatDataUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutExperienceInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type CandidatDataUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<CandidatDataCreateWithoutExperienceInput, CandidatDataUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutExperienceInput
    upsert?: CandidatDataUpsertWithoutExperienceInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutExperienceInput, CandidatDataUpdateWithoutExperienceInput>, CandidatDataUncheckedUpdateWithoutExperienceInput>
  }

  export type CandidatDataCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<CandidatDataCreateWithoutLanguagesInput, CandidatDataUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutLanguagesInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type EnumLanguageLevelFieldUpdateOperationsInput = {
    set?: $Enums.LanguageLevel
  }

  export type CandidatDataUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<CandidatDataCreateWithoutLanguagesInput, CandidatDataUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutLanguagesInput
    upsert?: CandidatDataUpsertWithoutLanguagesInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutLanguagesInput, CandidatDataUpdateWithoutLanguagesInput>, CandidatDataUncheckedUpdateWithoutLanguagesInput>
  }

  export type CandidatDataCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CandidatDataCreateWithoutCoursesInput, CandidatDataUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutCoursesInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type CandidatDataUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CandidatDataCreateWithoutCoursesInput, CandidatDataUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutCoursesInput
    upsert?: CandidatDataUpsertWithoutCoursesInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutCoursesInput, CandidatDataUpdateWithoutCoursesInput>, CandidatDataUncheckedUpdateWithoutCoursesInput>
  }

  export type CandidatDataCreateNestedOneWithoutHobbiesInput = {
    create?: XOR<CandidatDataCreateWithoutHobbiesInput, CandidatDataUncheckedCreateWithoutHobbiesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutHobbiesInput
    connect?: CandidatDataWhereUniqueInput
  }

  export type CandidatDataUpdateOneRequiredWithoutHobbiesNestedInput = {
    create?: XOR<CandidatDataCreateWithoutHobbiesInput, CandidatDataUncheckedCreateWithoutHobbiesInput>
    connectOrCreate?: CandidatDataCreateOrConnectWithoutHobbiesInput
    upsert?: CandidatDataUpsertWithoutHobbiesInput
    connect?: CandidatDataWhereUniqueInput
    update?: XOR<XOR<CandidatDataUpdateToOneWithWhereWithoutHobbiesInput, CandidatDataUpdateWithoutHobbiesInput>, CandidatDataUncheckedUpdateWithoutHobbiesInput>
  }

  export type UserCreateNestedOneWithoutAgencydataInput = {
    create?: XOR<UserCreateWithoutAgencydataInput, UserUncheckedCreateWithoutAgencydataInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencydataInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedManyWithoutAgencyInput = {
    create?: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput> | BranchCreateWithoutAgencyInput[] | BranchUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAgencyInput | BranchCreateOrConnectWithoutAgencyInput[]
    createMany?: BranchCreateManyAgencyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput> | BranchCreateWithoutAgencyInput[] | BranchUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAgencyInput | BranchCreateOrConnectWithoutAgencyInput[]
    createMany?: BranchCreateManyAgencyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAgencydataNestedInput = {
    create?: XOR<UserCreateWithoutAgencydataInput, UserUncheckedCreateWithoutAgencydataInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencydataInput
    upsert?: UserUpsertWithoutAgencydataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgencydataInput, UserUpdateWithoutAgencydataInput>, UserUncheckedUpdateWithoutAgencydataInput>
  }

  export type BranchUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput> | BranchCreateWithoutAgencyInput[] | BranchUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAgencyInput | BranchCreateOrConnectWithoutAgencyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutAgencyInput | BranchUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: BranchCreateManyAgencyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutAgencyInput | BranchUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutAgencyInput | BranchUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput> | BranchCreateWithoutAgencyInput[] | BranchUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAgencyInput | BranchCreateOrConnectWithoutAgencyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutAgencyInput | BranchUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: BranchCreateManyAgencyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutAgencyInput | BranchUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutAgencyInput | BranchUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type AgencyDataCreateNestedOneWithoutBranchInput = {
    create?: XOR<AgencyDataCreateWithoutBranchInput, AgencyDataUncheckedCreateWithoutBranchInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutBranchInput
    connect?: AgencyDataWhereUniqueInput
  }

  export type AgencyDataUpdateOneRequiredWithoutBranchNestedInput = {
    create?: XOR<AgencyDataCreateWithoutBranchInput, AgencyDataUncheckedCreateWithoutBranchInput>
    connectOrCreate?: AgencyDataCreateOrConnectWithoutBranchInput
    upsert?: AgencyDataUpsertWithoutBranchInput
    connect?: AgencyDataWhereUniqueInput
    update?: XOR<XOR<AgencyDataUpdateToOneWithWhereWithoutBranchInput, AgencyDataUpdateWithoutBranchInput>, AgencyDataUncheckedUpdateWithoutBranchInput>
  }

  export type UserCreateNestedOneWithoutAuthAccountsInput = {
    create?: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutAuthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthAccountsInput
    upsert?: UserUpsertWithoutAuthAccountsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthAccountsInput, UserUpdateWithoutAuthAccountsInput>, UserUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSkillsLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillsLevel | EnumSkillsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsLevelFilter<$PrismaModel> | $Enums.SkillsLevel
  }

  export type NestedEnumSkillsLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillsLevel | EnumSkillsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillsLevel[] | ListEnumSkillsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillsLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillsLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillsLevelFilter<$PrismaModel>
  }

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedEnumLanguageLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageLevel | EnumLanguageLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageLevelFilter<$PrismaModel> | $Enums.LanguageLevel
  }

  export type NestedEnumLanguageLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageLevel | EnumLanguageLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageLevel[] | ListEnumLanguageLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageLevelWithAggregatesFilter<$PrismaModel> | $Enums.LanguageLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageLevelFilter<$PrismaModel>
    _max?: NestedEnumLanguageLevelFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type AuthAccountCreateWithoutUserInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountCreateOrConnectWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountCreateManyUserInputEnvelope = {
    data: AuthAccountCreateManyUserInput | AuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AgencyDataCreateWithoutUserInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    about: string
    logo: string
    branch?: BranchCreateNestedManyWithoutAgencyInput
  }

  export type AgencyDataUncheckedCreateWithoutUserInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    about: string
    logo: string
    branch?: BranchUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyDataCreateOrConnectWithoutUserInput = {
    where: AgencyDataWhereUniqueInput
    create: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
  }

  export type CandidatDataCreateWithoutUserInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataUncheckedCreateWithoutUserInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutUserInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    update: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    data: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: AuthAccountScalarWhereInput
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthAccountScalarWhereInput = {
    AND?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    OR?: AuthAccountScalarWhereInput[]
    NOT?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    type?: StringFilter<"AuthAccount"> | string
    provide?: StringFilter<"AuthAccount"> | string
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    expiresAt?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    userId?: StringNullableFilter<"AuthAccount"> | string | null
  }

  export type AgencyDataUpsertWithoutUserInput = {
    update: XOR<AgencyDataUpdateWithoutUserInput, AgencyDataUncheckedUpdateWithoutUserInput>
    create: XOR<AgencyDataCreateWithoutUserInput, AgencyDataUncheckedCreateWithoutUserInput>
    where?: AgencyDataWhereInput
  }

  export type AgencyDataUpdateToOneWithWhereWithoutUserInput = {
    where?: AgencyDataWhereInput
    data: XOR<AgencyDataUpdateWithoutUserInput, AgencyDataUncheckedUpdateWithoutUserInput>
  }

  export type AgencyDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type CandidatDataUpsertWithoutUserInput = {
    update: XOR<CandidatDataUpdateWithoutUserInput, CandidatDataUncheckedUpdateWithoutUserInput>
    create: XOR<CandidatDataCreateWithoutUserInput, CandidatDataUncheckedCreateWithoutUserInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutUserInput, CandidatDataUncheckedUpdateWithoutUserInput>
  }

  export type CandidatDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CoursesCreateWithoutCandidateInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
  }

  export type CoursesUncheckedCreateWithoutCandidateInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
  }

  export type CoursesCreateOrConnectWithoutCandidateInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput>
  }

  export type CoursesCreateManyCandidateInputEnvelope = {
    data: CoursesCreateManyCandidateInput | CoursesCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutCandidateInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
  }

  export type EducationUncheckedCreateWithoutCandidateInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
  }

  export type EducationCreateOrConnectWithoutCandidateInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput>
  }

  export type EducationCreateManyCandidateInputEnvelope = {
    data: EducationCreateManyCandidateInput | EducationCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutCandidateInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
  }

  export type ExperienceUncheckedCreateWithoutCandidateInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
  }

  export type ExperienceCreateOrConnectWithoutCandidateInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput>
  }

  export type ExperienceCreateManyCandidateInputEnvelope = {
    data: ExperienceCreateManyCandidateInput | ExperienceCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type HobbiesCreateWithoutCandidateInput = {
    id?: string
    hobbie: string
  }

  export type HobbiesUncheckedCreateWithoutCandidateInput = {
    id?: string
    hobbie: string
  }

  export type HobbiesCreateOrConnectWithoutCandidateInput = {
    where: HobbiesWhereUniqueInput
    create: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput>
  }

  export type HobbiesCreateManyCandidateInputEnvelope = {
    data: HobbiesCreateManyCandidateInput | HobbiesCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type LanguagesCreateWithoutCandidateInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
  }

  export type LanguagesUncheckedCreateWithoutCandidateInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
  }

  export type LanguagesCreateOrConnectWithoutCandidateInput = {
    where: LanguagesWhereUniqueInput
    create: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput>
  }

  export type LanguagesCreateManyCandidateInputEnvelope = {
    data: LanguagesCreateManyCandidateInput | LanguagesCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type SkillsCreateWithoutCandidateInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
  }

  export type SkillsUncheckedCreateWithoutCandidateInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
  }

  export type SkillsCreateOrConnectWithoutCandidateInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput>
  }

  export type SkillsCreateManyCandidateInputEnvelope = {
    data: SkillsCreateManyCandidateInput | SkillsCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCandidatdataInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    agencydata?: AgencyDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCandidatdataInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    agencydata?: AgencyDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCandidatdataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidatdataInput, UserUncheckedCreateWithoutCandidatdataInput>
  }

  export type CoursesUpsertWithWhereUniqueWithoutCandidateInput = {
    where: CoursesWhereUniqueInput
    update: XOR<CoursesUpdateWithoutCandidateInput, CoursesUncheckedUpdateWithoutCandidateInput>
    create: XOR<CoursesCreateWithoutCandidateInput, CoursesUncheckedCreateWithoutCandidateInput>
  }

  export type CoursesUpdateWithWhereUniqueWithoutCandidateInput = {
    where: CoursesWhereUniqueInput
    data: XOR<CoursesUpdateWithoutCandidateInput, CoursesUncheckedUpdateWithoutCandidateInput>
  }

  export type CoursesUpdateManyWithWhereWithoutCandidateInput = {
    where: CoursesScalarWhereInput
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyWithoutCandidateInput>
  }

  export type CoursesScalarWhereInput = {
    AND?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    OR?: CoursesScalarWhereInput[]
    NOT?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    id?: StringFilter<"Courses"> | string
    course?: StringFilter<"Courses"> | string
    institution?: StringFilter<"Courses"> | string
    grade?: StringFilter<"Courses"> | string
    startdate?: DateTimeFilter<"Courses"> | Date | string
    enddate?: DateTimeFilter<"Courses"> | Date | string
    cdId?: StringFilter<"Courses"> | string
  }

  export type EducationUpsertWithWhereUniqueWithoutCandidateInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutCandidateInput, EducationUncheckedUpdateWithoutCandidateInput>
    create: XOR<EducationCreateWithoutCandidateInput, EducationUncheckedCreateWithoutCandidateInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutCandidateInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutCandidateInput, EducationUncheckedUpdateWithoutCandidateInput>
  }

  export type EducationUpdateManyWithWhereWithoutCandidateInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutCandidateInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    grade?: StringNullableFilter<"Education"> | string | null
    startdate?: DateTimeFilter<"Education"> | Date | string
    enddate?: DateTimeFilter<"Education"> | Date | string
    description?: StringNullableFilter<"Education"> | string | null
    cdId?: StringFilter<"Education"> | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutCandidateInput, ExperienceUncheckedUpdateWithoutCandidateInput>
    create: XOR<ExperienceCreateWithoutCandidateInput, ExperienceUncheckedCreateWithoutCandidateInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutCandidateInput, ExperienceUncheckedUpdateWithoutCandidateInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutCandidateInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    contract?: EnumContractTypeFilter<"Experience"> | $Enums.ContractType
    location?: StringNullableFilter<"Experience"> | string | null
    currently?: BoolFilter<"Experience"> | boolean
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringNullableFilter<"Experience"> | string | null
    cdId?: StringFilter<"Experience"> | string
  }

  export type HobbiesUpsertWithWhereUniqueWithoutCandidateInput = {
    where: HobbiesWhereUniqueInput
    update: XOR<HobbiesUpdateWithoutCandidateInput, HobbiesUncheckedUpdateWithoutCandidateInput>
    create: XOR<HobbiesCreateWithoutCandidateInput, HobbiesUncheckedCreateWithoutCandidateInput>
  }

  export type HobbiesUpdateWithWhereUniqueWithoutCandidateInput = {
    where: HobbiesWhereUniqueInput
    data: XOR<HobbiesUpdateWithoutCandidateInput, HobbiesUncheckedUpdateWithoutCandidateInput>
  }

  export type HobbiesUpdateManyWithWhereWithoutCandidateInput = {
    where: HobbiesScalarWhereInput
    data: XOR<HobbiesUpdateManyMutationInput, HobbiesUncheckedUpdateManyWithoutCandidateInput>
  }

  export type HobbiesScalarWhereInput = {
    AND?: HobbiesScalarWhereInput | HobbiesScalarWhereInput[]
    OR?: HobbiesScalarWhereInput[]
    NOT?: HobbiesScalarWhereInput | HobbiesScalarWhereInput[]
    id?: StringFilter<"Hobbies"> | string
    hobbie?: StringFilter<"Hobbies"> | string
    cdId?: StringFilter<"Hobbies"> | string
  }

  export type LanguagesUpsertWithWhereUniqueWithoutCandidateInput = {
    where: LanguagesWhereUniqueInput
    update: XOR<LanguagesUpdateWithoutCandidateInput, LanguagesUncheckedUpdateWithoutCandidateInput>
    create: XOR<LanguagesCreateWithoutCandidateInput, LanguagesUncheckedCreateWithoutCandidateInput>
  }

  export type LanguagesUpdateWithWhereUniqueWithoutCandidateInput = {
    where: LanguagesWhereUniqueInput
    data: XOR<LanguagesUpdateWithoutCandidateInput, LanguagesUncheckedUpdateWithoutCandidateInput>
  }

  export type LanguagesUpdateManyWithWhereWithoutCandidateInput = {
    where: LanguagesScalarWhereInput
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyWithoutCandidateInput>
  }

  export type LanguagesScalarWhereInput = {
    AND?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
    OR?: LanguagesScalarWhereInput[]
    NOT?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
    id?: StringFilter<"Languages"> | string
    language?: StringFilter<"Languages"> | string
    level?: EnumLanguageLevelFilter<"Languages"> | $Enums.LanguageLevel
    cdId?: StringFilter<"Languages"> | string
  }

  export type SkillsUpsertWithWhereUniqueWithoutCandidateInput = {
    where: SkillsWhereUniqueInput
    update: XOR<SkillsUpdateWithoutCandidateInput, SkillsUncheckedUpdateWithoutCandidateInput>
    create: XOR<SkillsCreateWithoutCandidateInput, SkillsUncheckedCreateWithoutCandidateInput>
  }

  export type SkillsUpdateWithWhereUniqueWithoutCandidateInput = {
    where: SkillsWhereUniqueInput
    data: XOR<SkillsUpdateWithoutCandidateInput, SkillsUncheckedUpdateWithoutCandidateInput>
  }

  export type SkillsUpdateManyWithWhereWithoutCandidateInput = {
    where: SkillsScalarWhereInput
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyWithoutCandidateInput>
  }

  export type SkillsScalarWhereInput = {
    AND?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    OR?: SkillsScalarWhereInput[]
    NOT?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    id?: StringFilter<"Skills"> | string
    skill?: StringFilter<"Skills"> | string
    level?: EnumSkillsLevelFilter<"Skills"> | $Enums.SkillsLevel
    cdId?: StringFilter<"Skills"> | string
  }

  export type UserUpsertWithoutCandidatdataInput = {
    update: XOR<UserUpdateWithoutCandidatdataInput, UserUncheckedUpdateWithoutCandidatdataInput>
    create: XOR<UserCreateWithoutCandidatdataInput, UserUncheckedCreateWithoutCandidatdataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidatdataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidatdataInput, UserUncheckedUpdateWithoutCandidatdataInput>
  }

  export type UserUpdateWithoutCandidatdataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    agencydata?: AgencyDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidatdataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    agencydata?: AgencyDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CandidatDataCreateWithoutEducationInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutEducationInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutEducationInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutEducationInput, CandidatDataUncheckedCreateWithoutEducationInput>
  }

  export type CandidatDataUpsertWithoutEducationInput = {
    update: XOR<CandidatDataUpdateWithoutEducationInput, CandidatDataUncheckedUpdateWithoutEducationInput>
    create: XOR<CandidatDataCreateWithoutEducationInput, CandidatDataUncheckedCreateWithoutEducationInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutEducationInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutEducationInput, CandidatDataUncheckedUpdateWithoutEducationInput>
  }

  export type CandidatDataUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateWithoutSkillsInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutSkillsInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutSkillsInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutSkillsInput, CandidatDataUncheckedCreateWithoutSkillsInput>
  }

  export type CandidatDataUpsertWithoutSkillsInput = {
    update: XOR<CandidatDataUpdateWithoutSkillsInput, CandidatDataUncheckedUpdateWithoutSkillsInput>
    create: XOR<CandidatDataCreateWithoutSkillsInput, CandidatDataUncheckedCreateWithoutSkillsInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutSkillsInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutSkillsInput, CandidatDataUncheckedUpdateWithoutSkillsInput>
  }

  export type CandidatDataUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateWithoutExperienceInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutExperienceInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutExperienceInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutExperienceInput, CandidatDataUncheckedCreateWithoutExperienceInput>
  }

  export type CandidatDataUpsertWithoutExperienceInput = {
    update: XOR<CandidatDataUpdateWithoutExperienceInput, CandidatDataUncheckedUpdateWithoutExperienceInput>
    create: XOR<CandidatDataCreateWithoutExperienceInput, CandidatDataUncheckedCreateWithoutExperienceInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutExperienceInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutExperienceInput, CandidatDataUncheckedUpdateWithoutExperienceInput>
  }

  export type CandidatDataUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateWithoutLanguagesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutLanguagesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutLanguagesInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutLanguagesInput, CandidatDataUncheckedCreateWithoutLanguagesInput>
  }

  export type CandidatDataUpsertWithoutLanguagesInput = {
    update: XOR<CandidatDataUpdateWithoutLanguagesInput, CandidatDataUncheckedUpdateWithoutLanguagesInput>
    create: XOR<CandidatDataCreateWithoutLanguagesInput, CandidatDataUncheckedCreateWithoutLanguagesInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutLanguagesInput, CandidatDataUncheckedUpdateWithoutLanguagesInput>
  }

  export type CandidatDataUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateWithoutCoursesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutCoursesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    hobbies?: HobbiesUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutCoursesInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutCoursesInput, CandidatDataUncheckedCreateWithoutCoursesInput>
  }

  export type CandidatDataUpsertWithoutCoursesInput = {
    update: XOR<CandidatDataUpdateWithoutCoursesInput, CandidatDataUncheckedUpdateWithoutCoursesInput>
    create: XOR<CandidatDataCreateWithoutCoursesInput, CandidatDataUncheckedCreateWithoutCoursesInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutCoursesInput, CandidatDataUncheckedUpdateWithoutCoursesInput>
  }

  export type CandidatDataUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    hobbies?: HobbiesUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidatDataCreateWithoutHobbiesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CoursesCreateNestedManyWithoutCandidateInput
    education?: EducationCreateNestedManyWithoutCandidateInput
    experience?: ExperienceCreateNestedManyWithoutCandidateInput
    languages?: LanguagesCreateNestedManyWithoutCandidateInput
    skills?: SkillsCreateNestedManyWithoutCandidateInput
    user: UserCreateNestedOneWithoutCandidatdataInput
  }

  export type CandidatDataUncheckedCreateWithoutHobbiesInput = {
    id?: string
    firstname: string
    surname: string
    birthday: string
    phone: string
    resident: string
    about_my: string
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courses?: CoursesUncheckedCreateNestedManyWithoutCandidateInput
    education?: EducationUncheckedCreateNestedManyWithoutCandidateInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutCandidateInput
    languages?: LanguagesUncheckedCreateNestedManyWithoutCandidateInput
    skills?: SkillsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidatDataCreateOrConnectWithoutHobbiesInput = {
    where: CandidatDataWhereUniqueInput
    create: XOR<CandidatDataCreateWithoutHobbiesInput, CandidatDataUncheckedCreateWithoutHobbiesInput>
  }

  export type CandidatDataUpsertWithoutHobbiesInput = {
    update: XOR<CandidatDataUpdateWithoutHobbiesInput, CandidatDataUncheckedUpdateWithoutHobbiesInput>
    create: XOR<CandidatDataCreateWithoutHobbiesInput, CandidatDataUncheckedCreateWithoutHobbiesInput>
    where?: CandidatDataWhereInput
  }

  export type CandidatDataUpdateToOneWithWhereWithoutHobbiesInput = {
    where?: CandidatDataWhereInput
    data: XOR<CandidatDataUpdateWithoutHobbiesInput, CandidatDataUncheckedUpdateWithoutHobbiesInput>
  }

  export type CandidatDataUpdateWithoutHobbiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutCandidateNestedInput
    education?: EducationUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUpdateManyWithoutCandidateNestedInput
    user?: UserUpdateOneRequiredWithoutCandidatdataNestedInput
  }

  export type CandidatDataUncheckedUpdateWithoutHobbiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resident?: StringFieldUpdateOperationsInput | string
    about_my?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CoursesUncheckedUpdateManyWithoutCandidateNestedInput
    education?: EducationUncheckedUpdateManyWithoutCandidateNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutCandidateNestedInput
    languages?: LanguagesUncheckedUpdateManyWithoutCandidateNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserCreateWithoutAgencydataInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    candidatdata?: CandidatDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgencydataInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    candidatdata?: CandidatDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgencydataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgencydataInput, UserUncheckedCreateWithoutAgencydataInput>
  }

  export type BranchCreateWithoutAgencyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
  }

  export type BranchUncheckedCreateWithoutAgencyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
  }

  export type BranchCreateOrConnectWithoutAgencyInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput>
  }

  export type BranchCreateManyAgencyInputEnvelope = {
    data: BranchCreateManyAgencyInput | BranchCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAgencydataInput = {
    update: XOR<UserUpdateWithoutAgencydataInput, UserUncheckedUpdateWithoutAgencydataInput>
    create: XOR<UserCreateWithoutAgencydataInput, UserUncheckedCreateWithoutAgencydataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgencydataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgencydataInput, UserUncheckedUpdateWithoutAgencydataInput>
  }

  export type UserUpdateWithoutAgencydataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    candidatdata?: CandidatDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgencydataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    candidatdata?: CandidatDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BranchUpsertWithWhereUniqueWithoutAgencyInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutAgencyInput, BranchUncheckedUpdateWithoutAgencyInput>
    create: XOR<BranchCreateWithoutAgencyInput, BranchUncheckedCreateWithoutAgencyInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutAgencyInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutAgencyInput, BranchUncheckedUpdateWithoutAgencyInput>
  }

  export type BranchUpdateManyWithWhereWithoutAgencyInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutAgencyInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    email?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    fax?: StringNullableFilter<"Branch"> | string | null
    location?: StringFilter<"Branch"> | string
    logo?: StringNullableFilter<"Branch"> | string | null
    adId?: StringFilter<"Branch"> | string
  }

  export type AgencyDataCreateWithoutBranchInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    about: string
    logo: string
    user: UserCreateNestedOneWithoutAgencydataInput
  }

  export type AgencyDataUncheckedCreateWithoutBranchInput = {
    id?: string
    agency_name: string
    slug: string
    address: string
    phone: string
    p_iva_c_f: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    about: string
    logo: string
  }

  export type AgencyDataCreateOrConnectWithoutBranchInput = {
    where: AgencyDataWhereUniqueInput
    create: XOR<AgencyDataCreateWithoutBranchInput, AgencyDataUncheckedCreateWithoutBranchInput>
  }

  export type AgencyDataUpsertWithoutBranchInput = {
    update: XOR<AgencyDataUpdateWithoutBranchInput, AgencyDataUncheckedUpdateWithoutBranchInput>
    create: XOR<AgencyDataCreateWithoutBranchInput, AgencyDataUncheckedCreateWithoutBranchInput>
    where?: AgencyDataWhereInput
  }

  export type AgencyDataUpdateToOneWithWhereWithoutBranchInput = {
    where?: AgencyDataWhereInput
    data: XOR<AgencyDataUpdateWithoutBranchInput, AgencyDataUncheckedUpdateWithoutBranchInput>
  }

  export type AgencyDataUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAgencydataNestedInput
  }

  export type AgencyDataUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    agency_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    p_iva_c_f?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAuthAccountsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    agencydata?: AgencyDataCreateNestedOneWithoutUserInput
    candidatdata?: CandidatDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthAccountsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    agencydata?: AgencyDataUncheckedCreateNestedOneWithoutUserInput
    candidatdata?: CandidatDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
  }

  export type UserUpsertWithoutAuthAccountsInput = {
    update: XOR<UserUpdateWithoutAuthAccountsInput, UserUncheckedUpdateWithoutAuthAccountsInput>
    create: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthAccountsInput, UserUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type UserUpdateWithoutAuthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agencydata?: AgencyDataUpdateOneWithoutUserNestedInput
    candidatdata?: CandidatDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agencydata?: AgencyDataUncheckedUpdateOneWithoutUserNestedInput
    candidatdata?: CandidatDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AuthAccountCreateManyUserInput = {
    id?: string
    type: string
    provide: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provide?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesCreateManyCandidateInput = {
    id?: string
    course: string
    institution: string
    grade: string
    startdate: Date | string
    enddate: Date | string
  }

  export type EducationCreateManyCandidateInput = {
    id?: string
    degree: string
    school: string
    grade?: string | null
    startdate: Date | string
    enddate: Date | string
    description?: string | null
  }

  export type ExperienceCreateManyCandidateInput = {
    id?: string
    company: string
    contract: $Enums.ContractType
    location?: string | null
    currently?: boolean
    startDate: Date | string
    endDate: Date | string
    description?: string | null
  }

  export type HobbiesCreateManyCandidateInput = {
    id?: string
    hobbie: string
  }

  export type LanguagesCreateManyCandidateInput = {
    id?: string
    language: string
    level?: $Enums.LanguageLevel
  }

  export type SkillsCreateManyCandidateInput = {
    id?: string
    skill: string
    level?: $Enums.SkillsLevel
  }

  export type CoursesUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    enddate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contract?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    location?: NullableStringFieldUpdateOperationsInput | string | null
    currently?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HobbiesUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
  }

  export type HobbiesUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
  }

  export type HobbiesUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hobbie?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
  }

  export type LanguagesUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
  }

  export type LanguagesUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    level?: EnumLanguageLevelFieldUpdateOperationsInput | $Enums.LanguageLevel
  }

  export type SkillsUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
  }

  export type SkillsUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
  }

  export type SkillsUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillsLevelFieldUpdateOperationsInput | $Enums.SkillsLevel
  }

  export type BranchCreateManyAgencyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fax?: string | null
    location: string
    logo?: string | null
  }

  export type BranchUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CandidatDataCountOutputTypeDefaultArgs instead
     */
    export type CandidatDataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CandidatDataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgencyDataCountOutputTypeDefaultArgs instead
     */
    export type AgencyDataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgencyDataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CandidatDataDefaultArgs instead
     */
    export type CandidatDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CandidatDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationDefaultArgs instead
     */
    export type EducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillsDefaultArgs instead
     */
    export type SkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperienceDefaultArgs instead
     */
    export type ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguagesDefaultArgs instead
     */
    export type LanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoursesDefaultArgs instead
     */
    export type CoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoursesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HobbiesDefaultArgs instead
     */
    export type HobbiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HobbiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgencyDataDefaultArgs instead
     */
    export type AgencyDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgencyDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthAccountDefaultArgs instead
     */
    export type AuthAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokensDefaultArgs instead
     */
    export type TokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokensDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}