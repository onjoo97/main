var namMember = new Array(
"DUST ON YOUR MIND",
"No man's land (feat. Qim Isle)",
"save me",
"MIRROR",
"Put it back on",
"TO",
"Take pills",
"Another season with you",
"Karma calls", 
"Lovers of Artists",
"Television star",
"You broke my heart but..",
"in the middle",
"Your Yerin (feat. Rejjie Snow)",
"Teary lover"
);

var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;

function initList(){
var n = 0;
var mid;
var i;

lstMember[n] = new Array();
for (i=0; i<namMember.length; i++) {
lstMember[n][i] = i;
}
parent[n] = -1;
totalSize = 0;
n++;

for (i=0; i<lstMember.length; i++) {
if(lstMember[i].length>=2) {
mid = Math.ceil(lstMember[i].length/2);
lstMember[n] = new Array();
lstMember[n] = lstMember[i].slice(0,mid);
totalSize += lstMember[n].length
