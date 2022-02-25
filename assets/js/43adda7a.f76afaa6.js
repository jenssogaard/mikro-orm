"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4654],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(k,i(i({ref:t},m),{},{components:n})):o.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Quick Start"},l=void 0,p={unversionedId:"quick-start",id:"version-5.0/quick-start",title:"Quick Start",description:"First install the module via yarn or npm and do not forget to install the",source:"@site/versioned_docs/version-5.0/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/quick-start.md",tags:[],version:"5.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1645778038,formattedLastUpdatedAt:"2/25/2022",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Usage with MongoDB",permalink:"/docs/usage-with-mongo"},next:{title:"Usage with NestJS",permalink:"/docs/usage-with-nestjs"}},m=[],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First install the module via ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the\ndatabase driver as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @mikro-orm/core @mikro-orm/mongodb     # for mongo\nyarn add @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nyarn add @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -s @mikro-orm/core @mikro-orm/mongodb     # for mongo\nnpm i -s @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nnpm i -s @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"Next you will need to enable support for ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"decorators"),"\nas well as ",(0,a.kt)("inlineCode",{parentName:"p"},"esModuleInterop")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"experimentalDecorators": true,\n"emitDecoratorMetadata": true,\n"esModuleInterop": true\n')),(0,a.kt)("p",null,"Then call ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To access driver specific methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"em.createQueryBuilder()")," we need to specify\nthe driver type when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init<D>()"),". Alternatively we can cast the\n",(0,a.kt)("inlineCode",{parentName:"p"},"orm.em")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," exported from the driver package:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/postgresql';\nconst em = orm.em as EntityManager;\nconst qb = em.createQueryBuilder(...);\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package\n\nconst orm = await MikroORM.init<PostgreSqlDriver>({\n  entities: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  dbName: 'my-db-name',\n  type: 'postgresql',\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,a.kt)("p",null,"There are more ways to configure your entities, take a look at\n",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/installation/"},"installation page"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/configuration"},"Advanced Configuration")," section.")),(0,a.kt)("p",null,"Then you will need to fork entity manager for each request so their\n",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/identity-map/"},"identity maps")," will not collide.\nTo do so, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",(0,a.kt)("inlineCode",{parentName:"p"},"queryParser")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. ")),(0,a.kt)("p",null,"More info about ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," is described ",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/identity-map/#request-context"},"here"),"."),(0,a.kt)("p",null,"Now you can start defining your entities (in one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"entities")," folders). This is how\nsimple entity can look like in mongo driver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/MongoBook.ts"',title:'"./entities/MongoBook.ts"'},"@Entity()\nexport class MongoBook {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @SerializedPrimaryKey()\n  id: string;\n\n  @Property()\n  title: string;\n\n  @ManyToOne()\n  author: Author;\n\n  @ManyToMany()\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),(0,a.kt)("p",null,"For SQL drivers, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"id: number")," PK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/SqlBook.ts"',title:'"./entities/SqlBook.ts"'},"@Entity()\nexport class SqlBook {\n\n  @PrimaryKey()\n  id: number;\n\n}\n")),(0,a.kt)("p",null,"Or if you want to use UUID primary keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/UuidBook.ts"',title:'"./entities/UuidBook.ts"'},"import { v4 } from 'uuid';\n\n@Entity()\nexport class UuidBook {\n\n  @PrimaryKey()\n  uuid = v4();\n\n}\n")),(0,a.kt)("p",null,"More information can be found in\n",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/defining-entities/"},"defining entities section")," in docs."),(0,a.kt)("p",null,"When you have your entities defined, you can start using ORM either via ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nor via ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository"),"s."),(0,a.kt)("p",null,"To save entity state to database, you need to persist it. Persist determines\nwhether to use ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait em.persistAndFlush([book1, book2, book3]);\n")),(0,a.kt)("p",null,"To fetch entities from database you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"find()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findOne()")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const authors = em.find(Author, {});\n\nfor (const author of authors) {\n  console.log(author); // instance of Author entity\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) { // iterating books collection\n    console.log(book); // instance of Book entity\n    console.log(book.title); // My Life on The Wall, part 1/2/3\n  }\n}\n")),(0,a.kt)("p",null,"More convenient way of fetching entities from database is by using ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findOne")," calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const booksRepository = em.getRepository(Book);\n\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  orderBy: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),(0,a.kt)("p",null,"Take a look at docs about ",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/entity-manager/"},"working with ",(0,a.kt)("inlineCode",{parentName:"a"},"EntityManager")),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/repositories/"},"using ",(0,a.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),"."))}c.isMDXComponent=!0}}]);