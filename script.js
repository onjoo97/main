var namMember = new Array(
"<br>DUST ON YOUR MIND</br>",
"<br>No man's land (feat. Qim Isle)</br>",
"<br>save me</br>",
"<br>MIRROR</br>",
"<br>Put it back on</br>",
"<br>TO</br>",
"<br>Take pills</br>",
"<br>Another season with you</br>",
"<br>Karma calls</br>",
"<br>Lovers of Artists</br>",
"<br>Television star</br>",
"<br>You broke my heart but..</br>",
"<br>in the middle</br>",
"<br>Your Yerin (feat. Rejjie Snow)</br>",
"<br>Teary lover</br>"
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
totalSize += lstMember[n].length;
parent[n] = i;
n++;
lstMember[n] = new Array();
lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
totalSize += lstMember[n].length;
parent[n] = i;
n++;
}
}

for (i=0; i<namMember.length; i++) {
rec[i] = 0;
}
nrec = 0;

for (i=0; i<=namMember.length; i++) {
equal[i] = -1;
}

cmp1 = lstMember.length-2;
cmp2 = lstMember.length-1;
head1 = 0;
head2 = 0;
numQuestion = 1;
finishSize = 0;
finishFlag = 0;
}

function sortList(flag){
var i;
var str;

if (flag<0) {
rec[nrec] = lstMember[cmp1][head1];
head1++;
nrec++;
finishSize++;
while (equal[rec[nrec-1]]!=-1) {
rec[nrec] = lstMember[cmp1][head1];
head1++;
nrec++;
finishSize++;
}
}
else if (flag>0) {
rec[nrec] = lstMember[cmp2][head2];
head2++;
nrec++;
finishSize++;
while (equal[rec[nrec-1]]!=-1) {
rec[nrec] = lstMember[cmp2][head2];
head2++;
nrec++;
finishSize++;
}
}
else {
rec[nrec] = lstMember[cmp1][head1];
head1++;
nrec++;
finishSize++;
while (equal[rec[nrec-1]]!=-1) {
rec[nrec] = lstMember[cmp1][head1];
head1++;
nrec++;
finishSize++;
}
equal[rec[nrec-1]] = lstMember[cmp2][head2];
rec[nrec] = lstMember[cmp2][head2];
head2++;
nrec++;
finishSize++;
while (equal[rec[nrec-1]]!=-1) {
rec[nrec] = lstMember[cmp2][head2];
head2++;
nrec++;
finishSize++;
}
}

if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
while (head1<lstMember[cmp1].length){
rec[nrec] = lstMember[cmp1][head1];
head1++;
nrec++;
finishSize++;
}
}
else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
while (head2<lstMember[cmp2].length){
rec[nrec] = lstMember[cmp2][head2];
head2++;
nrec++;
finishSize++;
}
}

if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
lstMember[parent[cmp1]][i] = rec[i];
}
lstMember.pop();
lstMember.pop();
cmp1 = cmp1-2;
cmp2 = cmp2-2;
head1 = 0;
head2 = 0;

if (head1==0 && head2==0) {
for (i=0; i<namMember.length; i++) {
rec[i] = 0;
}
nrec = 0;
}
}

if (cmp1<0) {
str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
document.getElementById("battleNumber").innerHTML = str;

showResult();
finishFlag = 1;
}
else {
showImage();
}
}

function showResult() {
var ranking = 1;
var sameRank = 1;
var str = "";
var i;

str += "<table style=\"width:200px; font-size:12px; line-height:120%; margin-left:auto; margin-right:auto; border:1px solid #000; border-collapse:collapse\" align=\"center\">";
str += "<tr><td style=\"color:#ffffff; background-color:#000; text-align:center;\">순위<\/td><td style=\"color:#ffffff; background-color:#000; text-align:center;\">이름<\/td><\/tr>";

for (i=0; i<namMember.length; i++) {
str += "<tr><td style=\"border:1px solid #000; text-align:right; padding-right:5px;\">"+ranking+"<\/td><td style=\"border:1px solid #000; padding-left:5px;\">"+namMember[lstMember[0][i]]+"<\/td><\/tr>";
if (i<namMember.length-1) {
if (equal[lstMember[0][i]]==lstMember[0][i+1]) {
sameRank++;
} else {
ranking += sameRank;
sameRank = 1;
}
}
}
str += "<\/table>";

document.getElementById("resultField").innerHTML = str;
}

function showImage() {
var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
var str1 = ""+toNameFace(lstMember[cmp1][head1]);
var str2 = ""+toNameFace(lstMember[cmp2][head2]);

document.getElementById("battleNumber").innerHTML = str0;
document.getElementById("leftField").innerHTML = str1;
document.getElementById("rightField").innerHTML = str2;

numQuestion++;
}

function toNameFace(n){
var str = namMember[n];
return str;
}

---
