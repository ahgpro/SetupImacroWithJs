// iMacros Bootstrap - Write your macros with JavaScript.
// Be careful, you need to rename and set the extension of your macro to ".js".


// 1. Variables Initialization.


var variable1, variable2, variable3, prenomNom;

macro = "";

variable1 = "";

variable2 = "";

variable3 = "";

prenomNom = "arnaud";

telephone = "0000000000";

email = "hhuguenin.arnaud@gmail.com";

address = "15 rue des bois";

city = "Saint cyr";

postalCode = "37000";

cardnumber = "0000000000000000";

security = "000";

// 2. Built-in Variables & Macro Initialization.


macro += "CODE:" + "\n";

macro += "SET !TIMEOUT_STEP 2" + "\n";

macro += "SET !TIMEOUT_TAG 2" + "\n";

macro += "SET !TIMEOUT_PAGE 45" + "\n";

macro += "SET !ERRORIGNORE YES" + "\n";


// 3. Clear Cookies, Cache and Set a Proxy


macro += "CLEAR" + "\n";


// 4. Action 1.


macro += "TAB T=1" + "\n";

macro += "TAB CLOSEALLOTHERS" + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += "URL GOTO=http://www.supremenewyork.com/shop/all/tops_sweaters" + "\n"; // <-- change me


// 5. Action 2.

macro += "PAUSE" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET>SELECT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET>SELECT>OPTION:nth-of-type(2)" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.5" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(2)>DIV>DIV>FORM>FIELDSET:nth-of-type(2)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.7" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>DIV>DIV>A:nth-of-type(2)" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

// 6. Remplis le formulaire partie 1

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV>INPUT" CHARS="' + prenomNom + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(2)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=MOUSEMOVE SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(2)>INPUT" POINT="(373,244)"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=MOUSEUP POINT="(373,244)"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(2)>INPUT" CHARS="' + email + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(3)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(3)>INPUT" CHARS="' + telephone + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(4)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(4)>INPUT" CHARS="' + address + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(7)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(7)>INPUT" CHARS="' + city +'"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(8)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(8)>INPUT" CHARS="' + postalCode + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=MOUSEDOWN SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(9)>SELECT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=MOUSEUP POINT="(437,460)"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(9)>SELECT>OPTION:nth-of-type(13)" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV>FIELDSET>DIV:nth-of-type(10)>DIV>INS" BUTTON=0' + "\n";

// 6bis Remplis la 2eme partie du formulaire

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV>SELECT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV>SELECT>OPTION:nth-of-type(2)" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV:nth-of-type(3)>DIV>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=1" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV:nth-of-type(3)>DIV>INPUT" CHARS="'+ cardnumber + '"' + "\n";

macro += "WAIT SECONDS=1" + "\n";

// AJOUTER COMMANDE MOIS ET ANNEE CARTE bancaire ici 
// <---------------------------------------------->


// <---------------------------------------------->

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(3)>INPUT" BUTTON=0' + "\n";

macro += "WAIT SECONDS=0.4" + "\n";

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>DIV:nth-of-type(3)>DIV:nth-of-type(3)>INPUT" CHARS="' + security + '"' + "\n";

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(3)>DIV:nth-of-type(2)>FIELDSET>P>LABEL>DIV>INS" BUTTON=0' + "\n";

// 7. Clear Browser.

macro += "WAIT SECONDS=0.3" + "\n";

macro += 'EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(2)>DIV>FORM>DIV:nth-of-type(4)>DIV>INPUT" BUTTON=0' + "\n";


macro += "WAIT SECONDS=1" + "\n";

macro += "CLEAR" + "\n";


// 8. Run the Macro.


iimDisplay("iMacro is now running.");

iimPlay(macro);