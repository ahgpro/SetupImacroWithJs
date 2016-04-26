// iMacros Bootstrap - Write your macros with JavaScript.
// Be careful, you need to rename and set the extension of your macro to ".js".


// 1. Variables Initialization.


var variable1, variable2, variable3, i;

macro = "";

variable1 = "";

variable2 = "";

variable3 = "";


// 2. Built-in Variables & Macro Initialization.


macro += "CODE:" + "\n";

macro += "SET !TIMEOUT_STEP 1" + "\n";

macro += "SET !TIMEOUT_TAG 1" + "\n";

macro += "SET !TIMEOUT_PAGE 5" + "\n";

macro += "SET !ERRORIGNORE YES" + "\n";


// 3. Clear Cookies, Cache and Set a Proxy


macro += "CLEAR" + "\n";


// 4. Action 1.


macro += "TAB T=1" + "\n";

macro += "TAB CLOSEALLOTHERS" + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += "URL GOTO=http://www.supremenewyork.com/shop/all/tops_sweaters" + "\n";


// 5. Ajoute tout les articles dans le panier du 1 au 20 sur la page desiné par l'url si dessus.


for (i = 1; i < 20; i++){

macro += "TAB T=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>ARTICLE:nth-of-type(' + i + ')>DIV>A>IMG" BUTTON=0 MODIFIERS="meta"' + "\n";

macro += 'TAB T=2' + "\n";

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>UL>LI:nth-of-type(3)>A>IMG" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET>SELECT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET>SELECT>OPTION:nth-of-type(2)" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.5" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET:nth-of-type(2)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.7" + "\n";

macro += "TAB CLOSE" + "\n";

}

macro += "PAUSE" + "\n";


// 7. Clear Browser.


macro += "WAIT SECONDS=1" + "\n";

macro += "CLEAR" + "\n";


// 8. Run the Macro.


iimDisplay("iMacro is now running.");

iimPlay(macro);