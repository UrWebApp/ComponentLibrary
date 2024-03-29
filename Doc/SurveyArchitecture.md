### Node.js V8

* 介紹：Node.js 是一個能夠在伺服器端執行 JavaScript 的平台，其背後所使用的引擎是 Google 以  C++ 開發的 V8 引擎。
* 包管理系統：Node.js 預設附帶的包管理系統為 npm (Node Package Manager)，可透過此系統方便地管理套件。
* 常見差異與選擇：在使用 Node 以前前端多是由 cdn 或本地 implicit dependency 隱式依賴 js 容易造成相依問題，沒辦法清楚看到程式碼依賴外部的函式庫、依賴不存在，或者引入順序錯誤，應用程序將無法正常運行、依賴被引入但是並沒有使用，瀏覽器將被迫下載無用代碼；
* 使用方法：透過指令安裝 Node.js 後，即可透過 npm 或 Yarn 來安裝套件。
* 安裝與使用套件：透過指令 npm install 或 yarn add，即可安裝相應套件，並透過 require 或 import 語法將套件引入專案。
* 套件版本控制：透過 package.json 可以管理專案所使用套件的版本，避免產生相容性問題。

### NPM、Yarn、Nuget

* 介紹：NPM、Yarn、Nuget 均為套件管理系統，NPM 是 Node.js 的官方套件管理工具，Yarn 是 Facebook 開發的套件管理工具，Nuget 則是專為 .NET 平台而設計的套件管理工具。
* 常見差異與選擇：NPM 與 Yarn 在功能上大致相同，Yarn 擁有較快的速度及更好的穩定性；Nuget 則是針對 .NET 平台的套件管理，具有專為 .NET 開發者所設計的功能。
* 使用方法：透過指令安裝相應的套件管理工具後，即可透過指令安裝、更新、移除套件。
* 安裝與使用套件：透過指令 install 或 add，即可安裝相應套件，並透過 require 或 import 語法將套件引入專案。
* 套件版本控制：透過相應套件管理工具的版本控制系統，可控制套件版本。

### Webpack

* 參考：[為什麼前端需要工程化？ — webpack](https://ithelp.ithome.com.tw/articles/10214480)、[關於 Webpack，它是什麼？能夠做什麼？為什麼？怎麼做？— freeCodeCamp 的筆記](https://askie.today/what-is-webpack/)、[[note] Webpack 學習筆記](https://pjchender.dev/webpack/note-webpack/)
* 介紹：Webpack 也是一種 NPM 套件由 Js 編寫並執行於 Nodejs，是一個 JavaScript 模組打包工具，能夠將多個 JavaScript 檔案及相關資源整合打包成一個或多個 bundle，以利於網頁應用程式的載入。
* 為什麼前端需要工程化？：在較複雜的網頁應用程式中，前端開發人員需要管理大量的 JavaScript 檔案及相關資源，以便組成一個完整的網頁應用程式。此時，使用 Webpack 等工具能夠自動化打包、壓縮、優化及管理程式碼，並透過模組化方式來提高程式碼的可維護性、可擴展性及可重用性。
* 使用方法：透過指令安裝 Webpack 後，需設定相關的配置檔案，以定義打包的規則及輸出的 bundle。
* 基本概念：entry、output、loader、plugin 等概念是 Webpack 中常用的概念，需了解其用途與作用。
* 設定檔案與模組化：透過配置檔案可定義不同的打包規則，並透過模組化方式將程式碼分割成較小的部分，以便進行打包、壓縮及管理。
* 常見功能：
  * 載入不同檔案格式：Webpack 可載入 JavaScript、CSS、圖片、字型等不同類型的檔案。
  * Code Splitting：將應用程式中的程式碼分割成多個 bundle，以利於加速載入時間。
  * 最佳化打包程式碼：透過壓縮、混淆、Tree Shaking 等技術，可大幅減少打包後的檔案大小及加速載入時間。
  * Webpack 的 Hot Module Replacement (HMR) 是一种工具，它可以在运行中更新你的 Web 应用程序，而无需重新加载整个页面。这样可以大大提高开发效率，因为你可以在修改代码后立即看到结果。
  * 模块解析：Webpack 会解析你的模块，并尝试将它们打包到输出文件中。如果某个模块存在问题，Webpack 会输出错误信息，并指出出现错误的模块和文件路径。
  * 插件和 Loader：Webpack 使用插件和 Loader 来处理不同类型的资源。如果插件或 Loader 存在问题，Webpack 会输出错误信息，并指出出现错误的插件或 Loader 名称和文件路径。
  * 语法检查：Webpack 会使用 ESLint 或者类似的工具来检查你的代码是否符合规范和语法。如果代码存在语法错误，Webpack 会输出错误信息，并指出出现错误的文件和行数。

### Gulp、Grunt、Parcel、Browserify、PUG、SASS、Babel

* 介紹：Gulp、Grunt、Parcel、Browserify、PUG、SASS、Babel 均為前端工具，都可以運行於nodejs，能夠協助前端開發人員加速開發、提高可維護性及可重用性等。
* 使用方法：透過指令安裝相應的工具後，需設定相關的配置檔案，以定義其使用方式及相應的規則。
* 基本功能介紹：
  * Gulp：自動化執行任務，如編譯 SASS、壓縮圖片等。
  * Grunt：自動化執行任務，如編譯 SASS
  * Parcel：快速打包 JavaScript、CSS、HTML 等檔案，且不需要進行設定，是一個快速上手的打包工具。
  * Browserify：透過 CommonJS 的方式，讓前端可以像後端一樣進行模組化開發，並透過 Browserify 進行打包及管理。
  * PUG：一種靈活的 HTML 模板語言，透過簡潔的語法，能夠讓 HTML 更易讀、更易維護。
  * SASS：一種 CSS 的前處理器，提供了更多的功能及擴展，如變數、巢狀規則、函式等，以便更有效率地編寫 CSS。
  * Babel：一個 JavaScript 編譯器，能夠將 ES6+ 轉換為 ES5，並支援一些最新的 JavaScript 語法及擴展。
  * ESLint：ESLint 是一个 JavaScript 代码检查工具，它可以帮助你根据你的配置文件检查 JavaScript 代码中的潜在问题和错误，并提供修复建议和规范约束。
  * Create React App：是React框架的官方腳手架工具，用於創建新的React應用程序。它提供了一個基本的React項目模板，並且在項目中集成了常用的開發工具，例如Webpack和Babel。它還提供了一些有用的功能，例如熱加載和自動代碼重載，以便開發人員可以快速迭代他們的應用程序。
  * Angular CLI：是Angular框架基於 Typescript 的官方命令行界面，可以幫助你創建、構建和部署Angular應用程序。它提供了一些常用的命令，例如創建新的Angular應用程序、生成新的組件、生成新的服務器、運行開發服務器等等。提供了預設的 webpack 設定檔，會將 TypeScript、Sass、Less、Stylus、PostCSS、ES6 等輸入檔案編譯，允許你透過 ng eject 指令來擷取出 webpack 設定檔案，然後進行自訂。

### Angular AOT / JIT / Ivy / Esbuild

* 參考：[NG 13 use  esbuild](https://www.reddit.com/r/Angular2/comments/10by6fg/comment/j4dpiux/)
* AOT：(Ahead-of-Time) 是一種編譯模式，是指在構建應用程序時將模板編譯為本機JavaScript代碼。這樣一來，當用戶訪問應用程序時，可以直接載入編譯後的JavaScript代碼，減少了代碼解析和編譯的時間。這樣可以提高應用程序的性能和加載速度。
* JIT：是一種編譯模式，在用戶運行應用程序時，即時編譯模板，轉換成本機JavaScript代碼。這樣做的好處是可以快速地開發和調試應用程序，因為在開發過程中可以即時看到模板的變化。
* Ivy：是Angular的新的渲染引擎，取代了舊的View Engine，它提供更高效的編譯和更快的啟動時間。它還支持更小的應用程序大小，更好的應用程序性能和更強大的模板編譯功能。
* Esbuild：esbuild 是一款快速的 JavaScript 构建工具，能够快速将 JavaScript、CSS 和其他资源文件打包成可部署的文件。这款工具具有快速的构建速度和高效的编译能力，可以显著提高应用程序的构建速度。虽然 Angular 没有直接使用 esbuild，但它使用了基于 esbuild 的工具 * ng-packagr 来打包 Angular 应用。ng-packagr 是一款在 Angular 5.0 版本中引入的打包工具，它默认使用 Webpack 作为打包引擎，但从 Angular 11.0 版本开始，ng-packagr 默认使用 esbuild 作为主要的打包引擎，以提高打包速度和性能。

### Vite

* 參考：[Native ESM、esbuild、HMR](https://ithelp.ithome.com.tw/m/users/20139636/ironman/3890)
* 介紹：Vite 是一個快速開發工具，能夠幫助前端開發人員快速開發網頁應用程式，並支援原生的 ESM (ES6 模組化)。
* 比較其他工具的優勝點：Vite 比起其他工具更快的原因在於使用了 esbuild 進行打包，且支援 Hot Module Replacement (HMR) 技術，能夠讓開發人員在修改程式碼時，即時地看到修改後的結果。
* 使用方法：透過指令安裝 Vite 後，可透過相應的配置檔案來進行設定及開發。
* 開發環境設定：Vite 預設使用本機端的網頁伺服器，以提高開發效率。