var SysMess = ""; var Stat = "";

CheckMess();
setInterval(CheckMess, 60000);

function DoSysMess() {
  var DSM1; var DSM2;

  DSM1 = SysMess.indexOf('"message"');

  if (DSM1 != -1) {
    DSM2 = SysMess.indexOf('"}', DSM1 + 1);
    SysMess = SysMess.substring(DSM1 + 11, DSM2);
  }
  else {
    SysMess = "";
  }

  if(SysMess != "") { document.getElementById('SysMessage').innerHTML = SysMess; document.getElementById('SysMessage').style.display = "block"; document.getElementById('SysMessage').style.paddingTop = "5px"; document.getElementById('SysMessage').style.paddingBottom = "5px"; }
}
function DoStat() {
  var DS1; var DS2;

  DS1 = Stat.indexOf("message");
  DS2 = Stat.indexOf('"},', DS2 + 1);

  Stat = Stat.substring(DS1 + 10,DS2);

  if(Stat != "" && Stat != "Winnipeg Transit is currently operating regular service") { document.getElementById('Status').innerHTML = Stat; document.getElementById('Status').style.display = "block"; }
}

function CheckMess() {
  if (SysMess == "") {
    fetch("https://api.winnipegtransit.com/v3/system-messages.json?api-key=yxCT5Ca2Ep5AVLc0z6zz")
    .then(response => { return response.json(); }).then(jsondata => { SysMess = JSON.stringify(jsondata); DoSysMess(); });
    //setTimeout(DoSysMess,1000); //Wait 1 second, to ensure data has been loaded first, then go to 'DoSysMess()'
  }
  if (Stat == "") {
    fetch("https://api.winnipegtransit.com/v3/statuses/schedule.json?api-key=yxCT5Ca2Ep5AVLc0z6zz")
    .then(response => { return response.json(); }).then(jsondata => { Stat = JSON.stringify(jsondata); DoStat(); });
    //setTimeout(DoStat,1000); //Wait 1 second, to ensure data has been loaded first, then go to 'DoStat()'
  }
}