//********Coded By Amanj Vakili********
//This is used to grab API data from Winnipeg Transit
//********Coded By Amanj Vakili********
var StopTimes; var StopFeats; var parser = new DOMParser(); var LX; var LX2; var i2; var i3; var Day2 = ""; var SchPer = "";

//Varibles to hold data from Winnipeg Transit API
var LRt = []; var LEst = []; var LEstSort = []; var LSch = []; var LSch2 = []; var LSchDate = []; var LEstSec = []; var LEstDate = []; var LSchSec = []; var LBus = []; var LBike = []; var LBike2 = []; var LCancel = []; var LDest = []; var LDest2 = []; var LTCol = []; var LBCol = []; var LNum = 0;
var LNum2 = 0; var LXRt; var LStopName = ""; var LRNum = []; var LRunUsed = []; var LROrigin = []; var LRTripNum = []; var LRtName = []; var LateBold = []; var qTime = ""; var getMultiNum = -1; var getMultiList = []; var lastLNum = 0; var getMultiStops = ''; var LDirect = [];

LateBold[1] = "";
LateBold[2] = "";

//Varibles to hold run number info
var LRNums; var LRNumList1 = []; var LRNumList2 = []; var LRNumList3 = []; var LRNumList4 = []; var LRNumList5 = []; var LRNumList6 = []; var LRNumList7 = [];

//Variables to hold garage info
var garInfo; var garInfoList1 = []; var garInfoList2 = [];

//Varibles to hold filters
var LStop = ""; var LStartTm = ""; var LStartTm2 = ""; var LStartTmSec = ""; var LEndTm = ""; var LRtUse = ""; var LRelTime = 60; var LCancelStyle = ""; var LRNumUse = "";
var LBuses = []; var LBusModelUse = ""; var LBusLenUse = ""; var LSignColourUse = ""; var LBikeRackUse = ""; var LCancelUse = ""; var LDateUse = ""; var LRefTime = 0; var refID; var LDestCont; var LOrigCont; var LDirectUse;

//Other Varibles
var SetTime; var LCheckModel = 0; var LCheckLength = 0; var LCheckColour = 0; var LRouteListed = []; var LXTable = ""; var LXTableRt = []; var XCol = ""; var LNumRt; var divWidth = 0;
var LEstSecRt = []; var LLastEstSecRt = []; var iTT = ""; var HolidaysY = []; var HolidaysM = []; var HolidaysD = []; var HolidayName = []; var DayName; var LBusListBk = []; var LBusListRun = []; var LBusListRunTm = []; var busCount = 0;
var LModList = []; var xModel; var busModels = []; var xModList; var xGarList; var foundModel = 0; var garages = []; var foundGarage = []; var xGFound; var garageDiv; var LGBusListBk = []; var LGBusListRun = []; var LGBike2 = [];
var xBreak = 0; var xRunColumn;
//Model Of Bus
busModels[1] = 'D30LF';
busModels[2] = 'D40LF';
busModels[3] = 'Calgary'; //1995 D40LF
busModels[4] = 'D40LFR';
busModels[5] = 'XD40';
busModels[6] = 'XD60';
//Bus Garage list
garages[1] = 'FRG'; //Fort Garry Garage
garages[2] = 'BG'; //Brandon Garage
garages[3] = 'NG'; //North Garage

const schCng = new Date('2024-12-15T03:00:00');

for (var i = 1; i <= 999; i++) {
  LBusListRun[i] = [];
  LBusListRunTm[i] = [];
  LModList[i] = [];
}

resetBusList();
resetModelList();

//Get data from Winnipeg Transit API
function getLive(GL, noLoad) {
  StopFeats = "None";
  SetTime = 10800; //} else { SetTime = 14400; }
  if (getAllNum > 0) { document.getElementById("error").innerHTML = "<br /><b>Loading, this may take a couple minutes...</b>"; } else if (noLoad == 0) { document.getElementById("error").innerHTML = "<br /><b>Loading...</b>"; }
  if (noLoad == 0) { document.getElementById("DepartureList").style.display = "none"; }

  if (getMultiNum == -1) { for (var i = 0; i <= 3000; i++) { LRNum[i] = ""; LROrigin[i] = ""; LRTripNum[i] = ""; } }
  for (var i = 0; i <= 3000; i++) { LRunUsed[i] = 0; }
  clearInterval(refID);

  LDateUse = document.getElementById('txtDate').value; //Date

  //Get Current date and day (Weekday/Saturday/Sunday)
  if (LDateUse.length == 10) { date = new Date(LDateUse + "T04:00:00"); } else { date = new Date(); date.setMinutes(date.getMinutes() - 1); }

  if (date >= schCng) { SchPer = '2024-12-15'; } else { SchPer = '2024-09-01'; }

  //Set 'CurTime' to current time in seconds, from 10800 (03:00) to 97199 (26:59)
  CurTime = (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds();
  if (CurTime < SetTime) { CurTime += 86400 };

  Day = date.getDay();

  //if (Day == 0 | (Day == 1 && date.getHours() < 3)) {

  if ((Day == 1 && date.getHours() >= 3) | (Day >= 2 && Day <= 5) | (Day == 6 && date.getHours() < 3)) { Day = 1; }
  else if (Day == 6 | (Day == 0 && date.getHours() < 3)) { Day = 2; }
  else if (Day == 0 | (Day == 1 && date.getHours() < 3)) { Day = 3; }

  HolidaysY[1] = 0; HolidaysM[1] = 1; HolidaysD[1] = 1; HolidayName[1] = "New Year's Day";
  HolidaysY[2] = 0; HolidaysM[2] = 7; HolidaysD[2] = 1; HolidayName[2] = "Canada Day";
  HolidaysY[3] = 0; HolidaysM[3] = 12; HolidaysD[3] = 25;HolidayName[3] = "Christmas";
  HolidaysY[4] = 0; HolidaysM[4] = 12; HolidaysD[4] = 26; HolidayName[4] = "Boxing Day";
  HolidaysY[5] = 2024; HolidaysM[5] = 2; HolidaysD[5] = 19; HolidayName[5] = "Louis Riel Day";
  HolidaysY[6] = 2024; HolidaysM[6] = 3; HolidaysD[6] = 29; HolidayName[6] = "Good Friday";
  HolidaysY[7] = 2024; HolidaysM[7] = 5; HolidaysD[7] = 20; HolidayName[7] = "Victoria Day";
  HolidaysY[8] = 2024; HolidaysM[8] = 8; HolidaysD[8] = 5; HolidayName[8] = "Terry Fox Day";
  HolidaysY[9] = 2024; HolidaysM[9] = 9; HolidaysD[9] = 2; HolidayName[9] = "Labour Day";
  HolidaysY[10] = 0; HolidaysM[10] = 9; HolidaysD[10] = 30; HolidayName[10] = "Sunday Service";
  HolidaysY[11] = 2024; HolidaysM[11] = 10; HolidaysD[11] = 14; HolidayName[11] = "Thanksgiving";
  HolidaysY[12] = 0; HolidaysM[12] = 11; HolidaysD[12] = 11; HolidayName[12] = "Rememberance Day";
  //HolidaysY[13] = 0; HolidaysM[13] = 12; HolidaysD[13] = 31; HolidayName[13] = "New Year's Eve";


  if (CurTime >= 86400) { date.setDate(date.getDate() - 1); }
  DayName = '';
  for (var i = 1; i <= 100; i++) {
    if ((date.getFullYear() == HolidaysY[i] | HolidaysY[i] == 0) && date.getMonth() + 1 == HolidaysM[i]  && date.getDate() == HolidaysD[i]) { Day = 3; DayName = HolidayName[i]; break; }
  }
  if (CurTime >= 86400) { date.setDate(date.getDate() + 1); }

  if (Day == 1) { Day2 = "Weekday"; }
  else if (Day == 2) { Day2 = "Saturday"; }
  else if (Day == 3) { Day2 = "Sunday"; }

  if (DayName == '') { DayName = Day2; } else if (DayName == 'Canada Day' | DayName == "New Year's Eve") { Day = 4; Day2 = 'CD'; }

  //Retrieve filters
  if (GL != "") { LStop = GL; } else { LStop = document.getElementById('txtStop').value; } //Stop Number

  if (LStop.length > 5 && getMultiNum == -1) { getMultiList = LStop.split(','); getMultiNum = 0; getMultiStops = LStop; }
  if (getMultiNum > -1) { LStop = getMultiList[getMultiNum]; }

  LStartTm = document.getElementById('txtStartTm').value; //Start Time
  LStartTm2 = LStartTm;

  LEndTm = document.getElementById('txtEndTm').value; //End Time
  if (LEndTm == '') { LEndTm = "02:59"; }
  //LEndTm2 = LEndTm;

  LRtUse = document.getElementById('txtRtUse').value.toUpperCase(); //Route(s)

  LRNumUse = document.getElementById('txtRun').value; //Run
  LBuses[1] = document.getElementById('txtBus1').value; //Lower Bus
  if (LBuses[1] == "") { LBuses[1] = 1; }

  LBuses[2] = document.getElementById('txtBus2').value; //Upper Bus
  if (LBuses[2] == "") { LBuses[2] = 999; }

  LBusModelUse = document.getElementById('selModel').value; //Bus Model
  LBusLenUse = document.getElementById('selLength').value; //Bus Length
  LSignColourUse = document.getElementById('selSignColour').value; //Bus Sign Colour

  LBikeRackUse = document.getElementById('selBikeRack').value; //Bike Rack
  LCancelUse = document.getElementById('selCancelled').value; //Cancelled

  LDirectUse = document.getElementById('selDir').value; //Direction
  LDestCont = document.getElementById('txtDest').value; //Destination
  LOrigCont = document.getElementById('txtOrig').value; //Origin

  //Relative Time
  LRelTime = document.getElementById('txtRelativeTm').value;
  if (LRelTime == "") { LRelTime = 60; } else { LRelTime = parseInt(LRelTime); }

  //Refresh Rate
  LRefTime = document.getElementById('txtRefTm').value;
  if (LRefTime == "" | isNaN(parseInt(LRefTime))) { LRefTime = 0; } else { LRefTime = parseInt(LRefTime); }
  if (LRefTime < 15 && LRefTime != 0) { LRefTime = 15; }

  //Load garage info
  var client2 = new XMLHttpRequest();
  client2.open('GET', 'Files/Runs/' + SchPer + '/Runs' + Day + '.txt');
  client2.onreadystatechange = function() { garInfo = client2.responseText; }
  client2.send();

  //Load run number and origin data for requested stop
  var client = new XMLHttpRequest();
  client.open('GET', 'Stops/' + SchPer + '/' + LStop + '.txt');
  client.onreadystatechange = function() { LRNums = client.responseText; }
  client.send();

  if (LStartTm != '' | LDateUse != '' | LEndTm != '') {
    //Set 'LStartTm' (Time of Day portion)
    XA[1] = date.getHours() + ""; XA[2] = date.getMinutes() + ""; XA[3] = date.getSeconds() + "";
    for (var i = 1; i <= 3; i++) { if (XA[i].length == 1) { XA[i] = "0" + XA[i]; } } //Add leading zeros, as needed.

    if (LStartTm != "") { LStartTm =  LStartTm + ":00"; } else { LStartTm = XA[1] + ":" + XA[2] + ":" + XA[3]; }
    if (LStartTm.length == 7) { LStartTm = "0" + LStartTm; }

    //Set 'LStartTmSec' to requested start time in seconds, from 14400 (04:00) to 100799 (27:59)
    LStartTmSec = (parseInt(LStartTm.substring(0,2)) * 3600) + (parseInt(LStartTm.substring(3,5)) * 60) + parseInt(LStartTm.substring(6,8));
    if (LStartTmSec < SetTime) { LStartTmSec += 86400 };

    //Set 'LStartTm' (Date portion)
    if (CurTime >= 86400 && LStartTmSec < 86400) { date.setDate(date.getDate() - 1); } else if (CurTime < 86400 && LStartTmSec >= 86400) { date.setDate(date.getDate() + 1); }
    XA[4] = (date.getMonth() + 1) + ""; XA[5] = date.getDate() + ""; XA[6] = date.getFullYear() + "";
    if (CurTime >= 86400 && LStartTmSec < 86400) { date.setDate(date.getDate() + 1); } else if (CurTime < 86400 && LStartTmSec >= 86400) { date.setDate(date.getDate() - 1); }
    for (var i = 4; i <= 5; i++) { if (XA[i].length == 1) { XA[i] = "0" + XA[i]; } } //Add leading zeros, as needed.
    LStartTm = XA[6] + "-" + XA[4] + "-" + XA[5] + "T" + LStartTm;
  }

  if (LEndTm != '') {
    if (LEndTm.length == 4) { LEndTm = '0' + LEndTm + ':00'; } else { LEndTm = LEndTm + ':00'; }
  }

  //Set 'LEndTm'. Always set to end of service for current day.
  if (CurTime < 86400) { date.setDate(date.getDate() + 1); }
  XA[4] = (date.getMonth() + 1) + "";
  XA[5] = date.getDate() + "";
  XA[6] = date.getFullYear() + "";
  if (CurTime < 86400) { date.setDate(date.getDate() - 1); }

  for (var i = 4; i <= 5; i++) { if (XA[i].length == 1) { XA[i] = "0" + XA[i]; } } //Add leading zeros, as needed.
  //LEndTm = '04:00:00';

  LStartTm = "&start=" + LStartTm;
  
  getLive2();
  if (LRefTime >= 15) { refID = setInterval(refList, LRefTime * 1000); }
}

function refList() {
  getLive('', 1);
}

//Get data from Winnipeg Transit API, in '.json' format
function getLive2() {
  try {
    i2 = 'https://api.winnipegtransit.com/v3/stops/' + LStop + '/schedule.json?api-key=yxCT5Ca2Ep5AVLc0z6zz';
    if (LStartTm != '') { i2 += LStartTm; }
    i2 += '&end=';
    if (LEndTm != '') { i2 += LEndTm; }
    i2 += '&usage=long&route=' + LRtUse;

    //if (LStartTm == "" && LDateUse == "") {
    //  i2 = "https://api.winnipegtransit.com/v3/stops/" + LStop + "/schedule.json?api-key=yxCT5Ca2Ep5AVLc0z6zz&end=&usage=long&route=" + LRtUse;
    //}
    //else {
    //  i2 = "https://api.winnipegtransit.com/v3/stops/" + LStop + "/schedule.json?api-key=yxCT5Ca2Ep5AVLc0z6zz" + LStartTm + "&end=" + LEndTm + "&usage=long&route=" + LRtUse;
    //}

    fetch(i2)
    .then(response => { if (response.status != 200) { getMultiNum = -1; getAllNum = 0; document.getElementById("error").innerHTML = "<br /><b>Error " + response.status + "</b>"; if (response.status == 404) { document.getElementById("error").innerHTML += "<br />Make sure the stop number and date are correct." } else if (response.status == 500) { document.getElementById("error").innerHTML += "<br />Make sure the stop number and date are correct. Winnipeg Transit's servers may also be experiencing a problem." } } return response.json(); }).then(jsondata => { StopTimes = JSON.stringify(jsondata); setTimeout(DoLive,500); });
  }
  catch(err) {
    document.getElementById("error").innerHTML = "<p><b>" + err.message + "</b></p>";
  }

  if (getMultiNum > 0 | getAllNum > 0) {} else {
    try {
      i2 = 'https://api.winnipegtransit.com/v3/stops/' + LStop + '/features.json?api-key=yxCT5Ca2Ep5AVLc0z6zz';

      fetch(i2)
      .then(response => {
        if (response.status != 200) {
          //getMultiNum = -1; getAllNum = 0; document.getElementById("error").innerHTML = "<br /><b>Error " + response.status + "</b>";
          if (response.status == 404) {
            //document.getElementById("error").innerHTML += "<br />Make sure the stop number and date are correct.";
          } else if (response.status == 500) {
            //document.getElementById("error").innerHTML += "<br />Make sure the stop number and date are correct. Winnipeg Transit's servers may also be experiencing a problem.";
          }
        }
        return response.json();
      }).then(jsondata => { StopFeats = JSON.stringify(jsondata); });
    }
    catch(err) {
      //document.getElementById("error").innerHTML = "<p><b>" + err.message + "</b></p>";
    }
  }
}


//Filter and display data from WT API
function DoLive() {
  for (var i = 0; i <= 699; i++) { LRouteListed[i] = "fals"; }

  //Build list of Garage Data.
  garInfoList1 = garInfo.split("\n");
  LNum2 = garInfoList1.length - 2;

  for (var i = 0; i <= LNum2; i++) {
    i2 = garInfoList1[i].indexOf(",");
    i3 = garInfoList1[i].indexOf(",", i2 + 1);
    garInfoList2[i] =  garInfoList1[i].substring(i2 + 1, i3);

    i2 = garInfoList1[i] .indexOf(",");
    garInfoList1[i] =  garInfoList1[i].substring(0, i2);
  }

  //Build list of run number data. LRNumList1 = Run Numbers, LRNumList2 = Route Numbers
  //LRNumList3 = Scheduled Times, LRNumList4 = Day of Week (1 to 4), LRNumList5 = Origin
  LRNumList1 = LRNums.split("\n");
  LNum2 = LRNumList1.length - 2;

  for (var i = 0; i <= LNum2; i++) {
    i2 = LRNumList1[i].indexOf(",", 0);
    i3 = LRNumList1[i].indexOf(",", i2 + 1);
    LRNumList2[i] = LRNumList1[i].substring(i2 + 1, i3);

    i2 = LRNumList1[i].indexOf(':', 0);
    i3 = LRNumList1[i].indexOf(',', i2 + 1);
    LRNumList3[i] = LRNumList1[i].substring(i2 - 2, i3);

    LRNumList4[i] = LRNumList1[i].substring(LRNumList1[i].length - 1);

    i2 = LRNumList1[i].indexOf(":", 0);
    i2 = LRNumList1[i].indexOf(",", i2 + 1);
    i3 = LRNumList1[i].indexOf(",", i2 + 1);
    LRNumList6[i] = LRNumList1[i].substring(i2 + 1, i3);

    i2 = LRNumList1[i].indexOf('"', 1);
    i3 = LRNumList1[i].indexOf('"', i2 + 1);
    LRNumList5[i] = LRNumList1[i].substring(i2 + 1, i3);

    i2 = LRNumList1[i].indexOf(",", 0);
    i2 = LRNumList1[i].indexOf(",", i2 + 1);
    i3 = LRNumList1[i].indexOf(",", i2 + 1);
    LRNumList7[i] = LRNumList1[i].substring(i2 + 1, i3);

    i2 = LRNumList1[i] .indexOf(",", 0);
    LRNumList1[i] = LRNumList1[i].substring(0, i2);
  }

  //Clear out everything below filters
  document.getElementById("DepartureList").innerHTML = '<b id="StopName"></b><br /><b id="RtList">Routes Listed:</b><br /><b id="featList"></b><br /><b><a href="../Timetables/' + SchPer + '/Stops/' + LStop + '/Stop.html?day=' + Day + '">View Static Schedule</a></b><br /><br />';

  //Get and display the list of stop features
  if (getMultiNum > 0 | getAllNum > 0) { } else {
    document.getElementById("featList").innerHTML = 'Stop Features:';
    i2 = StopFeats.indexOf('"name"');
    i3 = StopFeats.indexOf('"',i2 + 8);

    if (StopFeats.substring(i2 + 8, i3) != "features") {
      if (StopFeats.substring(i2 + 8, i3) == 'BUSwatch Electronic Sign') { document.getElementById("featList").innerHTML += " " + '<x1 style="background-color:#CCCCCC;color:#222222" id="route">BUSwatch Sign</x1>'; } else {
          if (StopFeats == "None") {
            document.getElementById("featList").innerHTML += " None";
          } else
          {
            document.getElementById("featList").innerHTML += " " + '<x1 style="background-color:#CCCCCC;color:#222222" id="route">' + StopFeats.substring(i2 + 8, i3) + "</x1>";
          }
      }
      do {
        i2 = StopFeats.indexOf('"name"', i3);
        if (i2 == -1) { break; }
        else {
          i3 = StopFeats.indexOf('"',i2 + 8);
          document.getElementById("featList").innerHTML += " " + '<x1 style="background-color:#CCCCCC;color:#222222" id="route">' + StopFeats.substring(i2 + 8, i3) + "</x1>";
        }    
      } while (1 == 1)
    } else { document.getElementById("featList").innerHTML += " None"; }
  }
  
  //Get name of requested stop, and display it, plus the stop number
  i2 = StopTimes.indexOf('"name"');
  i3 = StopTimes.indexOf('"',i2 + 8);
  LStopName = StopTimes.substring(i2 + 8, i3);
  if (LStopName == "Eastbound Kirkbridge at Pem bin a West") { LStopName = "Eastbound Kirkbridge at Pembina West"; }

  if (getMultiNum > -1) {
    document.getElementById("StopName").innerHTML = "Stops " + getMultiStops + " (" + DayName + ")";
    document.title = "Stops " + getMultiStops + " - WTLive";
  } else {
   document.getElementById("StopName").innerHTML = "Stop " + LStop + " " + LStopName + " (" + DayName + ")";
   document.title = "Stop " + LStop + " - WTLive";
  }

  i2 = StopTimes.indexOf('"query-time"');
  //i3 = StopTimes.indexOf('"',i2 + 8);
  qTime = StopTimes.substring(i2 + 25, i2 + 33);
  CurTime = (parseInt(qTime.substring(0,2)) * 3600) + (parseInt(qTime.substring(3,5)) * 60) + parseInt(qTime.substring(6,8));
  document.getElementById("StopName").innerHTML += ' (Query Time: ' + qTime + ')'; 
  
  if (CurTime < SetTime) { CurTime += 86400 };

  //Get 'color' and 'background-color' information for each route from the Winnipeg Transit API
  if (getMultiNum <= 0) { LNum = 0; }
  for (var i = 0; i <= StopTimes.length; i++) {
    i = StopTimes.indexOf('"route"',i + 1); if (i == -1) { break; }
    LX = StopTimes.indexOf('"scheduled-stops"',i + 1);// if (LX == -1) { LX = StopTimes.length; }
    LX2 = StopTimes.substring(i, LX);

    i2 = LX2.indexOf('"key"');
    i3 = LX2.indexOf(',', i2 + 1);
    if (LX2.substring(i2 + 6, i3) == '"BLUE"') { LXRt = 0; }
    else if (LX2.substring(i2 + 6, i3 - 2) == '"S4"') { LXRt = LX2.substring(i2 + 7, i3); }
    else { LXRt = LX2.substring(i2 + 6, i3); } //If the route is 'BLUE', set 'LXRt' to 600. Otherwise, set 'LXRt' to number from API.

    i2 = LX2.indexOf('"name"');
    i2 = LX2.indexOf(' ', i2 + 1);
    i2 = LX2.indexOf(' ', i2 + 1);
    //i2 = LX2.indexOf(' ', i2 + 1);
    i3 = LX2.indexOf(',', i2 + 1);
    LRtName[LXRt] = LX2.substring(i2 + 1, i3 - 1); //Get Route Name
    LRtName[LXRt] = LRtName[LXRt].replace(/ - /g, '-');
    LRtName[LXRt] = LRtName[LXRt].replace(/Industrial Park/g, 'Park');
    if (LRtName[LXRt] == 'Unicity-Strauss Dr-Murray Park') { LRtName[LXRt] = 'Unicity-Strauss-Murray Park'; }
    if (LRtName[LXRt] == 'South Transcona-Crossroads Station') { LRtName[LXRt] = 'Industrial'; }
    if (LRtName[LXRt] == 'South St. Vital-St. Vital Centre' | LRtName[LXRt] == 'South St. Vital-St. Marys') { LRtName[LXRt] = 'South St. Vital'; }

    i2 = LX2.indexOf('"background-color"');
    LBCol[LXRt] = "background-color:" + LX2.substring(i2 + 20, i2 + 27) + ";"; //Get 'background-color'

    i2 = LX2.indexOf('"color"');
    LTCol[LXRt] = "color:" + LX2.substring(i2 + 9, i2 + 16) + ";"; //Get 'color' (text colour)

    if (LXRt == 24 && (Day == 3 | Day == 4 | LStop == "10881"  | LStop == "10386" | LStop == "10383")) { LRtName[LXRt] = "Ness"; LBCol[LXRt] = "background-color:#FFFFFF;"; }
  }

//Get schedule information from the Winnipeg Transit API
  for (var i = 0; i <= StopTimes.length; i++) {
    //Find 'cancelled', which is the first piece of info for each departure
    i = StopTimes.indexOf('"cancelled"',i + 1); if (i == -1) { break; }
    LX = StopTimes.indexOf('"cancelled"',i + 1); if (LX == -1) { LX = StopTimes.length; }
    LX2 = StopTimes.substring(i, LX);

    LNum++;
    LCancel[LNum] = LX2.substring(13, 17); //Get cancelled info. 'true' or 'fals'.

    //Get STA
    i2 = LX2.indexOf('"scheduled"');
    LSch[LNum] = LX2.substring(i2 + 24, i2 + 32);
    LSch2[LNum] = LSch[LNum];
    LSchDate[LNum] = LX2.substring(i2 + 13, i2 + 23);

    //Get ETA
    i2 = LX2.indexOf('"estimated"', i2 + 1);
    LEst[LNum] = LX2.substring(i2 + 24, i2 + 32);
    LEstDate[LNum] = LX2.substring(i2 + 13, i2 + 23);

    LEstSec[LNum] = String((parseInt(LEst[LNum].substring(0,2)) * 3600) + (parseInt(LEst[LNum].substring(3,5)) * 60) + parseInt(LEst[LNum].substring(6,8)));
    LEstSec[LNum] = "0".repeat(5 - LEstSec[LNum].length) + LEstSec[LNum];
    
    LEstSort[LNum] = parseInt(LEstDate[LNum].replaceAll("-","") + LEstSec[LNum]);
    //Get route data
    i2 = LX2.indexOf('"variant"', i2 + 1);
    i3 = LX2.indexOf('-', i2 + 1);
    LRt[LNum] = LX2.substring(i2 + 18, i3);
    LDirect[LNum] = LX2.substring(i3 + 1, i3 + 2);

    //Get destination
    i2 = LX2.indexOf('"name"', i2 + 1);
    i3 = LX2.indexOf('"', i2 + 8);
    LDest[LNum] = LX2.substring(i2 + 8, i3);
    if (LDest[LNum].substring(LDest[LNum].length - 4,LDest[LNum].length) == " via") { LDest[LNum] = LDest[LNum].substring(0, LDest[LNum].length - 4); } //If the destination ends with ' via', get rid of it.
    for (var i4 = 1; i4 <= 100; i4++) { if (LDest[LNum] == ToReplace[i4] && (RepRt[i4] == LRt[LNum] | RepRt[i4] == "0")) { LDest[LNum] = Replacement[i4]; break; } } //Change certain destination names. See 'RouteDests.js'.

    //Get bus number
    i2 = LX2.indexOf('"bus"', i2 + 1);
    i3 = LX2.indexOf(',', i2 + 1);
    if (i2 == -1) { LBus[LNum] = '<x1 style="text-decoration: line-through;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</x1>'; } else { LBus[LNum] = LX2.substring(i2 + 13, i3); }
    if (LBus[LNum].indexOf('"') == 0) { LBus[LNum] = LBus[LNum].substr(1,LBus[LNum].length - 2); }

    //Get bike rack ('true' or 'fals')
    i2 = LX2.indexOf('"bike-rack"', i2 + 1);
    if (i2 == -1) { LBike[LNum] = ""; } else { LBike[LNum] = LX2.substring(i2 + 13, i2 + 17); }
    if (LBike[LNum] == "true") { LBike[LNum] = '<x1 style="font-size:16px;"> 🚲</x1>'; LBike2[LNum] = '🚲'; } else if (LBike[LNum] == "fals") { LBike[LNum] = '<x1 style="font-size:16px;"> 🚳</x1>'; LBike2[LNum] = '🚳'; }

    //If the hour in the scheduled/estimated time is 00/01/02, set to 24/25/26, respectively.
    if (LSch2[LNum].substring(0,2) == "00") { LSch2[LNum] = "24" + LSch2[LNum].substring(2); }
    if (LSch2[LNum].substring(0,2) == "01") { LSch2[LNum] = "25" + LSch2[LNum].substring(2); }
    if (LSch2[LNum].substring(0,2) == "02" | LSch2[LNum].substring(0,2) == "03") { LSch2[LNum] = "26" + LSch2[LNum].substring(2); }

    //if (LEst[LNum].substring(0,2) == "00") { LEst[LNum] = "24" + LEst[LNum].substring(2); }
    //if (LEst[LNum].substring(0,2) == "01") { LEst[LNum] = "25" + LEst[LNum].substring(2); }
    //if (LEst[LNum].substring(0,2) == "02") { LEst[LNum] = "26" + LEst[LNum].substring(2); }
    //if (LEst[LNum].substring(0,2) == "03") { LEst[LNum] = "27" + LEst[LNum].substring(2); }

    //Set 'LSchSec'/'LEstSec' to Scheduled/Estimated time, respectively, in seconds from 14400 (04:00) to 100799 (27:59)
    LSchSec[LNum] = (parseInt(LSch[LNum].substring(0,2)) * 3600) + (parseInt(LSch[LNum].substring(3,5)) * 60) + parseInt(LSch[LNum].substring(6,8));
    LEstSec[LNum] = (parseInt(LEst[LNum].substring(0,2)) * 3600) + (parseInt(LEst[LNum].substring(3,5)) * 60) + parseInt(LEst[LNum].substring(6,8));

    if (LSchSec[LNum] < SetTime) { LSchSec[LNum] += 86400; } //else if (LSchDate[LNum] != LSchDate[1]) { LSchSec[LNum] += 86400;  } 
    if (LEstSec[LNum] < SetTime) { LEstSec[LNum] += 86400; } //else if (LEstDate[LNum] != LEstDate[1]) { LEstSec[LNum] += 86400;  } 

    //Get run number and origin
    for (var i4 = 0; i4 <= LNum2; i4++) {
      if (LRNumList2[i4] == LRt[LNum] && LRNumList3[i4] == LSch2[LNum] && LRNumList4[i4] == Day && LRunUsed[i4] == 0) {
        LRNum[LNum] = LRNumList1[i4];
        LROrigin[LNum] = LRNumList5[i4];
        LRTripNum[LNum] = LRNumList6[i4];
	    LDest2[LNum] = LRNumList7[i4];
        LRunUsed[i4] = 1;
        break;
      }
    }
    if (LDest[LNum] == "Notre Dame & Arlington" && LROrigin[LNum].includes("19 via Notre Dame")) { LDest[LNum] = "Notre Dame & Arlington via Notre Dame"; }
    if (LDest[LNum] == "Notre Dame & Arlington" && LROrigin[LNum].includes("19 via Logan")) { LDest[LNum] = "Notre Dame & Arlington via Logan"; }
    if (LDest[LNum] == "Downtown" && LROrigin[LNum].includes("19 via Notre Dame")) { LDest[LNum] = "Downtown via Notre Dame"; }
    if (LDest[LNum] == "Downtown" && LROrigin[LNum].includes("19 via Logan")) { LDest[LNum] = "Downtown via Logan"; }
    if (LDest[LNum] == "St. Anne's & Niakwa" && LROrigin[LNum].includes("55 via Meadowood")) { LDest[LNum] = "St. Anne's & Niakwa via Dakota"; }
    if (LDest[LNum] == "St. Anne's & Niakwa" && LROrigin[LNum].includes("55 via Dakota")) { LDest[LNum] = "St. Anne's & Niakwa via Meadowood"; }
    if (LDest[LNum] == "St. Anne's & Beliveau" && LROrigin[LNum].includes("55 via Meadowood")) { LDest[LNum] = "St. Anne's & Beliveau via Dakota"; }
    if (LDest[LNum] == "St. Anne's & Beliveau" && LROrigin[LNum].includes("55 via Dakota")) { LDest[LNum] = "St. Anne's & Beliveau via Meadowood"; }
	if (LDest2[LNum] == "Portage & Tylehurst") { LDest[LNum] = "Portage & Tylehurst"; }
	if (LDest2[LNum].includes("via Munroe") && LRt[LNum] == '45') { LDest[LNum] = LDest[LNum] + " via Munroe"; }

    //Check filters. If something doesn't match, get rid of it by reducing LNum by 1.
    LCheckModel = 0;
    LCheckLength = 0;
    LCheckColour = 0;

    if (LBusModelUse == "") { LCheckModel = 1; }
    else if (LBusModelUse == "-LF") {
      if (BusModel[parseInt(LBus[LNum])] ==  "D30LF" | BusModel[parseInt(LBus[LNum])] ==  "D40LF" | BusModel[parseInt(LBus[LNum])] ==  "D60LF") { LCheckModel = 1; }
    }
    else if (LBusModelUse == "-LFR") {
      if (BusModel[parseInt(LBus[LNum])] ==  "D40LFR") { LCheckModel = 1; }
    }
    else if (LBusModelUse == "Xcelsior") {
      if (BusModel[parseInt(LBus[LNum])] ==  "XD40" | BusModel[parseInt(LBus[LNum])] ==  "XD60") { LCheckModel = 1; }
    }
    else {
      if (LBusModelUse ==  BusModel[parseInt(LBus[LNum])]) { LCheckModel = 1; }
    }

    if (LBusLenUse == BusLength[parseInt(LBus[LNum])] | LBusLenUse == "") { LCheckLength = 1; }
    else if (LBusLenUse == "30/60 Feet" && (BusLength[parseInt(LBus[LNum])] == "30 Feet" | BusLength[parseInt(LBus[LNum])] == "60 Feet")) { LCheckLength = 1; }

    if (LSignColourUse ==  SignColor[parseInt(LBus[LNum])] | LSignColourUse == "") { LCheckColour = 1; }

    if (LRNum[LNum] != LRNumUse && LRNumUse != "") { LNum--; }
    else if (parseInt(LBus[LNum]) < parseInt(LBuses[1]) | parseInt(LBus[LNum]) > parseInt(LBuses[2]) | (LBus[LNum] == '<x1 style="text-decoration: line-through;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</x1>' && (parseInt(LBuses[1]) > 1 | parseInt(LBuses[2]) < 999))) { LNum--; }
    else if (LCheckModel == 0) { LNum--; }
    else if (LCheckLength == 0) { LNum--; }
    else if (LCheckColour == 0) { LNum--; }
    else if (LBikeRackUse != LBike[LNum] && LBikeRackUse != '') { LNum--; }
    else if (LCancelUse != LCancel[LNum] && LCancelUse != '') { LNum--; }
    else if (LDest[LNum].includes(LDestCont) == false && LDestCont != '') { LNum--; }
    else if (LROrigin[LNum].includes(LOrigCont) == false && LOrigCont != '') { LNum--; }
    else if (LDirect[LNum] != LDirectUse && LDirectUse != '') { LNum--; }
  }

  for (var i = 1; i <= LNum; i++) {
    if (LRt[i] == "BLUE") { LXRt = 0; }
    else if (LRt[i].substring(0,2) == "S4") { LXRt = parseInt(LRt[i].substring(1)); }
    else { LXRt = parseInt(LRt[i]); }
    LRouteListed[LXRt] = "true";
  }

  //Sort data
  for (var i = 1; i <= LNum; i++) {
    for (var i2 = 2; i2 <= LNum; i2++) {
      if (LEstSort[i2] < LEstSort[i2 - 1]) {
        LX = LRt[i2]; LRt[i2] = LRt[i2 - 1]; LRt[i2 - 1] = LX;
        LX = LDest[i2]; LDest[i2] = LDest[i2 - 1]; LDest[i2 - 1] = LX;
        LX = LEst[i2]; LEst[i2] = LEst[i2 - 1]; LEst[i2 - 1] = LX;
        LX = LEstSort[i2]; LEstSort[i2] = LEstSort[i2 - 1]; LEstSort[i2 - 1] = LX;
        LX = LSch[i2]; LSch[i2] = LSch[i2 - 1]; LSch[i2 - 1] = LX;
        LX = LEstSec[i2]; LEstSec[i2] = LEstSec[i2 - 1]; LEstSec[i2 - 1] = LX;
        LX = LSchSec[i2]; LSchSec[i2] = LSchSec[i2 - 1]; LSchSec[i2 - 1] = LX;
        LX = LBus[i2]; LBus[i2] = LBus[i2 - 1]; LBus[i2 - 1] = LX;
        LX = LBike[i2]; LBike[i2] = LBike[i2 - 1]; LBike[i2 - 1] = LX;
        LX = LBike2[i2]; LBike2[i2] = LBike2[i2 - 1]; LBike2[i2 - 1] = LX;
        LX = LRNum[i2]; LRNum[i2] = LRNum[i2 - 1]; LRNum[i2 - 1] = LX;
        LX = LROrigin[i2]; LROrigin[i2] = LROrigin[i2 - 1]; LROrigin[i2 - 1] = LX;
        LX = LRTripNum[i2]; LRTripNum[i2] = LRTripNum[i2 - 1]; LRTripNum[i2 - 1] = LX;
        LX = LRunUsed[i2]; LRunUsed[i2] = LRunUsed[i2 - 1]; LRunUsed[i2 - 1] = LX;
        LX = LCancel[i2]; LCancel[i2] = LCancel[i2 - 1]; LCancel[i2 - 1] = LX;
        LX = LDirect[i2]; LDirect[i2] = LDirect[i2 - 1]; LDirect[i2 - 1] = LX;
      }
    }
  }

  //Display data
  document.getElementById("RtList").innerHTML = "Routes Listed:";
  LNumRt = 0;
  for (var i = 0; i <= 699; i++) {
    if (LRouteListed[i] == 'true') {
      LNumRt++;
    }
  }

  for (var i = 0; i <= 699; i++) {
    LLastEstSecRt[i] = "";
    LEstSecRt[i] = "";
    if (LRouteListed[i] != "fals") {
      if (LNumRt != 1) { LX = "Route2"; } else { LX = "Route"; }
      if (i == 0) {
        document.getElementById("RtList").innerHTML += ' <a href="Routes/Map?Route=BLUE"><x1 id="Route" style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>BLUE</x1></a>';
        LXTableRt[i] = '<table id="rt0" class="' + LX + '"><tbody><tr><td colspan="5"><a href="Routes/Map?Route=BLUE"><b><x1 id=Route style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>BLUE</x1></b></a></td></tr><tr id="departuresTitle" style="top:0px;position:sticky;"><th id="RunID">Run</th><th id="RtID">Rt</th><th id="Dest">Destination</th><th id="Time">ETA</th><th id="Bus">Bus/Bk</th></tr>';
      }
      else if (i >= 400 && i <= 499)
      {
        document.getElementById("RtList").innerHTML += ' <a href="Routes/Map?Route=S' + i + '"><x1 id="Route" style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>' + i + '</x1></b>';
        LXTableRt[i] = '<table id=rt' + String(i) + ' class="' + LX + '"><tbody><tr><td colspan="5"><b><a id="darkLink" href="Routes/Map?Route=S' + i + '"><x1 id=Route style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>' + i + '</x1> ' + LRtName[i] + '</a></b></td></tr><tr id="departuresTitle" style="top:0px;position:sticky;"><th id="RunID">Run</th><th id="RtID">Rt</th><th id="Dest">Destination</th><th id="Time">ETA</th><th id="Bus">Bus/Bk</th></tr>';
      }
      else
      {
        document.getElementById("RtList").innerHTML += ' <a href="Routes/Map?Route=' + i + '"><x1 id="Route" style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>' + i + '</x1></b>';
        LXTableRt[i] = '<table id=rt' + String(i) + ' class="' + LX + '"><tbody><tr><td colspan="5"><b><a id="darkLink" href="Routes/Map?Route=' + i + '"><x1 id=Route style=' + LBCol[parseInt(i)] + LTCol[parseInt(i)] + '>' + i + '</x1> ' + LRtName[i] + '</a></b></td></tr><tr id="departuresTitle" style="top:0px;position:sticky;"><th id="RunID">Run</th><th id="RtID">Rt</th><th id="Dest">Destination</th><th id="Time">ETA</th><th id="Bus">Bus/Bk</th></tr>';
      }
    }
  }
  document.getElementById("bList").innerHTML = '';
  document.getElementById("mList").innerHTML = '';
  document.getElementById("gList").innerHTML = '';

  var TimeID = "Time";
  LXTable = '<table id="rtAll" class="Route"><tbody><tr><td  colspan="5"><b>All Routes</b></td></tr><tr id="departuresTitle" style="top:0px;position:sticky;"><th id="RunID">Run</th><th id="RtID">Rt</th><th id="Dest">Destination</th><th id="Time">ETA</th><th id="Bus">Bus/Bk</th></tr>';
  for (var i = 1; i <= LNum; i++) {
    //See if run is in bus list. If not, add it.
    if (LBus[i] != '<x1 style="text-decoration: line-through;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</x1>') {
      //console.log(LBus[i]);
      //console.log(i);
      //console.log('');

      //Set xModel based on the type of bus
           if (BusModel[parseInt(LBus[i])] == 'D30LF') { xModel = 1; }
      else if (BusModel[parseInt(LBus[i])] == 'D40LF') { xModel = 2; }
      else if (BusModel[parseInt(LBus[i])] == 'D40LFR') { xModel = 4; }
      else if (BusModel[parseInt(LBus[i])] == 'XD40') { xModel = 5; }
      else if (BusModel[parseInt(LBus[i])] == 'XD60') { xModel = 6; }

      if (LRt[i] == "BLUE") { LXRt = "0"; }
      else if (LRt[i].substring(0,2) == "S4") { LXRt = parseInt(LRt[i].substring(1)); }
      else { LXRt = parseInt(LRt[i]); }
      LModList[xModel][LXRt] = 1;
      if (parseInt(LBus[i]) >= 641 && parseInt(LBus[i]) <= 664) { LModList[3][LXRt] = 1; }

      if (LBusListRun[parseInt(LBus[i])][1] != LRNum[i] && LBusListRun[parseInt(LBus[i])][2] != LRNum[i] && LBusListRun[parseInt(LBus[i])][3] != LRNum[i] && LBusListRun[parseInt(LBus[i])][4] != LRNum[i]) {
        if (LBusListRun[parseInt(LBus[i])][1] == '') {
          LBusListRun[parseInt(LBus[i])][1] = LRNum[i];
          LBusListRunTm[parseInt(LBus[i])][1] = LSchSec[i];
          LBusListBk[parseInt(LBus[i])] = LBike2[i];
        }
        else if (LBusListRun[parseInt(LBus[i])][2] == '') {
          LBusListRun[parseInt(LBus[i])][2] = LRNum[i];
          LBusListRunTm[parseInt(LBus[i])][2] = LSchSec[i];
        }
        else if (LBusListRun[parseInt(LBus[i])][3] == '') {
          LBusListRun[parseInt(LBus[i])][3] = LRNum[i];
          LBusListRunTm[parseInt(LBus[i])][3] = LSchSec[i];
        }
        else if (LBusListRun[parseInt(LBus[i])][4] == '') {
          LBusListRun[parseInt(LBus[i])][4] = LRNum[i];
          LBusListRunTm[parseInt(LBus[i])][4] = LSchSec[i];
        }
      }
    }
    if (LCancel[i] == "true") { LCancelStyle = "Cancel"; } else { LCancelStyle = ""; }

    if (LEst[i].includes('<x1') == false) { LEst[i] = LEst[i].substring(0,5); }
    //Convert 'LEst' to relative time, unless 'LRelTime' = 0.
    if (LEst[i].length == 5) {
      //console.log(LEst[i]);
      LX = LEst[i];
      if (LEstSec[i] - CurTime <= LRelTime * 60 && LEstSec[i] - CurTime > -120 && LRelTime != 0) {
		LEst[i] = '<x1 class="tooltip"><span class="tooltiptext">ETA: ' + LX.substring(0,5) + '</span>' + Math.round((LEstSec[i] - CurTime) / 60) + ' Min</x1>';
	    if (LEstSec[i] - CurTime < 30 && LEstSec[i] - CurTime > 0) {
	      LEst[i] = '<x1 class="tooltip"><span class="tooltiptext">ETA: ' + LX.substring(0,5) + '</span>½ Min</x1>';
		} else if (LEstSec[i] - CurTime < 0 && LEstSec[i] - CurTime > -60) {
	      LEst[i] = '<x1 class="tooltip"><span class="tooltiptext">ETA: ' + LX.substring(0,5) + '</span>Due</x1>';
	    } else if (LEstSec[i] - CurTime < -60) {
		  LEst[i] = '<x1 class="tooltip"><span class="tooltiptext">ETA: ' + LX.substring(0,5) + '</span>Past</x1>'; 
		}
	  }


      if (LEstSec[i] - LSchSec[i] >= 300 | LEstSec[i] - LSchSec[i] <= -180) { LateBold[1] = '<b>'; LateBold[2] = '</b>'; } else { LateBold[1] = ''; LateBold[2] = ''; }

      if (LEstSec[i] - LSchSec[i] >= 30) {
         if (LEstSec[i] - LSchSec[i] >= 3600) { LEst[i] = LEst[i] + ' (<x1 id="TimeLate" class="tooltip"><span class="tooltiptext">Scheduled: ' + LSch[i].substring(0,5) + '</span>' + LateBold[1] + Math.floor((LEstSec[i] - LSchSec[i]) / 3600) + 'h ' + Math.floor(((LEstSec[i] - LSchSec[i]) % 3600) / 60) + 'm L' + LateBold[2] + '</x1>)'; } else { LEst[i] = LEst[i] + ' (<x1 id="TimeLate" class="tooltip"><span class="tooltiptext">Scheduled: ' + LSch[i].substring(0,5) + '</span>' + LateBold[1]; if (LEstSec[i] - LSchSec[i] >= 60) { LEst[i] = LEst[i] + Math.floor((LEstSec[i] - LSchSec[i]) / 60); } if ((LEstSec[i] - LSchSec[i]) % 60 >= 30 && (LEstSec[i] - LSchSec[i]) % 60 <= 59 && LEstSec[i] - LSchSec[i] < 600) { LEst[i] = LEst[i] + '½'; } LEst[i] = LEst[i]  + 'm L' + LateBold[2] + '</x1>)'; }
      }
      else if (LEstSec[i] - LSchSec[i] <= -30) { LEst[i] = LEst[i] + ' (<x1 id="TimeEarly" class="tooltip"><span class="tooltiptext">Scheduled: ' + LSch[i].substring(0,5) + '</span>' + LateBold[1]; if (LEstSec[i] - LSchSec[i] <= -60) { LEst[i] = LEst[i] + -Math.ceil((LEstSec[i] - LSchSec[i]) / 60); } if ((LSchSec[i] - LEstSec[i]) % 60 >= 30 && (LSchSec[i] - LEstSec[i]) % 60 <= 59 && LSchSec[i] - LEstSec[i] < 600) { LEst[i] = LEst[i] + '½'; } LEst[i] = LEst[i] + 'm E' + LateBold[2] + '</x1>)'; } 
      else { TimeID = "Time"; } 
    }

    if (LRt[i] == "BLUE") { LXRt = "0"; }
    else if (LRt[i].substring(0,2) == "S4") { LXRt = parseInt(LRt[i].substring(1)); }
    else { LXRt = parseInt(LRt[i]); }

    XCol = LBCol[parseInt(LXRt)];
    if (LXRt == 24 && (LDest[i] == "Polo Park" | LDest[i] == "Portage & Tylehurst" | LROrigin[i].includes("Polo Park") | Day == 3)) { XCol = "background-color:#FFFFFF;"; }

    LLastEstSecRt[LXRt] = LEstSecRt[LXRt];
    LEstSecRt[LXRt] = LEstSec[i];

    if (i > 1) {
      if (LEstSec[i] - LEstSec[i - 1] >= 7200  && LRNumUse == "" && LBusModelUse == "" && LBusLenUse == "" && LSignColourUse == "" && LBikeRackUse == "" && LCancelUse == "" && LBuses[1] == 1 && LBuses[2] == 999) {
        LXTable += '<tr id="departureLine"><td id="RunID" class="" colspan="5">&nbsp</td></tr>';
      }
    }

    if (LEstSecRt[LXRt] != "" && LLastEstSecRt[LXRt] != "") {
        if (LEstSecRt[LXRt] - LLastEstSecRt[LXRt] >= 7200  && LRNumUse == "" && LBusModelUse == "" && LBusLenUse == "" && LSignColourUse == "" && LBikeRackUse == "" && LCancelUse == ""  && LBuses[1] == 1 && LBuses[2] == 999) {
        LXTableRt[LXRt] += '<tr id="departureLine"><td id="RunID" class="" colspan="5">&nbsp</td></tr>';
      }
    }

    if (LBus[i] != '<x1 style="text-decoration: line-through;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</x1>' && BusModel[parseInt(LBus[i])] != "") { iTT = BusModel[parseInt(LBus[i])] + '<br />' + SignColor[parseInt(LBus[i])] + ' Sign<br />' + BusLength[parseInt(LBus[i])] + ExtraBusInfo[parseInt(LBus[i])]; } else { iTT = "Unknown"; }

    i3 = '<tr id="departureLine"><td id="RunID" class="' + LCancelStyle + '"><a id="darkLink" href="../Timetables/' + SchPer + '/Runs/' + Day2 + '/' + LRNum[i] + '/Run.html">' + LRNum[i] + '</a></td><td id="RtID" class="' + LCancelStyle + '"><a href="Routes/Map?Route=' + LRt[i] + '"><x1 id="Route" style=' + XCol + LTCol[parseInt(LXRt)] + '>' + LRt[i] + '</x1></a></td><td id="Dest" class="' + LCancelStyle + '">' + '<span class="tooltip"><span class="tooltiptext2">Origin: ' + LROrigin[i] + '</span>' + '<a id="darkLink" href="../Timetables/' + SchPer + '/Runs/' + Day2 + '/' + LRNum[i] + '/Run.html?trip=' + LRTripNum[i] + '#' + LStop + 'T' + LRTripNum[i] + LSch[i].substring(0,5) + '">' + LDest[i] + '</a>' + '</span></td><td id="' + TimeID + '" class="' + LCancelStyle + '">' + LEst[i] + '</td><td id="Bus" class="' + LCancelStyle + '"><span class="tooltip"><span class="tooltiptext2">' + iTT + '</span>' + LBus[i] + '</span>' + LBike[i] + '</td></tr>';

    LXTable += i3;
    LXTableRt[LXRt] += i3;
  }
  if (LNum == 0) { LXTable = '<table id="rtAll" class="Route"><tbody><tr><td><b>Nothing to Show!</b></td></tr></tbody></table>'; document.getElementById("RtList").innerHTML = "Routes Listed: None"; }
  LXTable += '</tbody></table>';
  for (var i = 0; i <= 699; i++) {
    LXTable[i] += '</tbody></table>';
  }

  if (LNumRt > 1 | LNumRt == 0) { document.getElementById("DepartureList").innerHTML += LXTable; }
  for (var i = 0; i <= 699; i++) {
        if (LRouteListed[i] != "fals" && LNumRt != 0) { document.getElementById("DepartureList").innerHTML += LXTableRt[i]; }
  }
  if (LNumRt > 1) { divWidth = document.getElementById('rtAll').offsetWidth + 10; } else { divWidth = 0; }
  for (var i = 0; i <= 699; i++) {
        if (LRouteListed[i] != "fals" && LNumRt > 1) { divWidth += document.getElementById('rt' + i).offsetWidth + 10; }
  }
  divWidth += 30;
  document.getElementById("error").innerHTML = "";
  document.getElementById("DepartureList").style.display = "block";
  //if (LNum == 0) { document.getElementById("DepartureList").innerHTML = document.getElementById("DepartureList").innerHTML + '<b>Nothing to Show!</b>' }
  document.getElementById("DepartureList").style.width = "max-content";

  //Sort Bus List
  for (var i = 1; i <= 999; i++) {
    for (var i2 = 2; i2 <= 999; i2++) {
      if (LBusListRunTm[i][i2] < LBusListRunTm[i][i2 - 1]) {
        LX = LBusListRunTm[i][i2]; LBusListRunTm[i][i2] = LBusListRunTm[i][i2 - 1]; LBusListRunTm[i][i2 - 1] = LX;
        LX = LBusListRun[i][i2]; LBusListRun[i][i2] = LBusListRun[i][i2 - 1]; LBusListRun[i][i2 - 1] = LX;
      }
    }
  }

xBreak = 0;
xRunColumn = 4;
for (var i = 4; i >= 1; i--) {
  for (var i2 = 1; i2 <= 999; i2++) {
    if (LBusListRun[i2][i] != '') { xRunColumn = i; xBreak = 1; break; }
  }
  if (xBreak == 1) { break; }
} 

  //Display/Update Bus/Garage List
  busCount = 0;
      foundGarage[1] = 0;
      foundGarage[2] = 0;
      foundGarage[3] = 0;

  for (var i = 1; i <= 999; i++) {
    if (LBusListRun[i][1] != '') {
      busCount++;
      LX = '<x1 class="busRun">Bus ' + i + ' ' + LBusListBk[i] + ' = <a id="darkLink" href="../Timetables/' + SchPer + '/Runs/' + Day2 + '/' + LBusListRun[i][1] + '/Run.html">' + LBusListRun[i][1] + '</a>';
      for (var i2 = 2; i2 <= 4; i2++) { if (LBusListRun[i][i2] != '') { LX += ', <a id="darkLink" href="../Timetables/' + SchPer + '/Runs/' + Day2 + '/' + LBusListRun[i][i2] + '/Run.html">' + LBusListRun[i][i2] + '</a>'; } }
      LX += '<br /></x1>';
      document.getElementById("bList").innerHTML += LX;

      xBreak = 0;
      for (var i4 = xRunColumn; i4 >= 1; i4--) {
      for (var i3 = 1; i3 <= 3; i3++) {
        xGFound = 0;
        xGarList = '';

        if (foundGarage[i3] == 0) {
          xGarList += '<b>' + garages[i3] + ':</b> <button id="buttShowGar' + i3 + '" onclick="dispGar(' + i3 + ')">Show</button><br />';
          xGarList += '<div id="gar' + i3 + '" style="display:none;">';
        } else {
          xGFound = 1;
        }

        for (var i2 = 0; i2 <= garInfoList1.length; i2++) {
          if (garInfoList1[i2] == LBusListRun[i][i4] && garInfoList2[i2] == garages[i3]) {
            foundGarage[i3] = 1;
            xGarList += LX;
            xBreak = 1;
            break;
          }
        }
        if (xGFound == 0) { xGarList += '</div>';
        if (foundGarage[i3] == 1) { document.getElementById("gList").innerHTML += xGarList; } } else { document.getElementById("gar" + i3).innerHTML += xGarList; }
      }
        if (xBreak == 1) { break; }
      }
    }
  }

for (var i = 1; i <= 3; i++) { if (foundGarage[i] == 1) {  document.getElementById("gar" + i).innerHTML += '<br />'; } }

  document.getElementById('busCount').innerHTML = busCount;
  if (getAllNum > 0 && getAllList[getAllNum + 1] != undefined) { grabAll(); } else { getAllNum = 0; }
  if (getMultiNum > -1 && getMultiList[getMultiNum + 1] != undefined) { lastLNum = LNum; getMultiNum++; getLive('', 0); } else { getMultiNum = -1; lastLNum = 0; }

  //Display/Update Model List
  //busCount = 0;
  for (var i = 1; i <= 6; i++) {
    foundModel = 0;
    xModList = '';
    xModList += '<b>' + busModels[i] + ':</b> <button id="buttShowMod' + i + '" onclick="dispMod(' + i + ')">Show</button><br />';
    xModList += '<div id="mod' + i + '" style="display:none;">';
    for (var i2 = 0; i2 <= 694; i2++) {
      if (LModList[i][i2] == 1) {
        foundModel = 1;
        if (i2 == 0) { xModList += '<a href="Routes/Map?Route=BLUE"><x1 id="Route" style="' + LBCol[i2] + LTCol[i2] + '">BLUE</x1></a><br />'; }
        else if (i2 >= 400 && i2 <= 499) { xModList += '<a href="Routes/Map?Route=S' + i2 + '"><x1 id="Route" style="' + LBCol[i2] + LTCol[i2] + '">S' + i2 + '</x1></a><br />'; }
        else { xModList += '<a href="Routes/Map?Route=' + i2 + '"><x1 id="Route" style="' + LBCol[i2] + LTCol[i2] + '">' + i2 + '</x1></a><br />'; }
      }
    }
    xModList += '<br /></div>'
    if (foundModel == 1) { document.getElementById("mList").innerHTML += xModList; }
  }
}

//Clear Bus List
function resetBusList() {
  for (var i = 1; i <= 999; i++) {
    LBusListBk[i] = '';
    LBike2[i] = '';
    for (var i2 = 1; i2 <= 4; i2++) {
      LBusListRun[i][i2] = '';
    }
  }
  document.getElementById("bList").innerHTML = '';
  document.getElementById("gList").innerHTML = '';
  document.getElementById('busCount').innerHTML = '0';
}

function dispMod(DM) {
  if (document.getElementById('mod' + DM).style.display == "none") { document.getElementById('mod' + DM).style.display = "block"; document.getElementById('buttShowMod' + DM).innerHTML = "Hide"; } else { document.getElementById('mod' + DM).style.display = "none"; document.getElementById('buttShowMod' + DM).innerHTML = "Show"; }
}

function dispGar(DM) {
  if (document.getElementById('gar' + DM).style.display == "none") { document.getElementById('gar' + DM).style.display = "block"; document.getElementById('buttShowGar' + DM).innerHTML = "Hide"; } else { document.getElementById('gar' + DM).style.display = "none"; document.getElementById('buttShowGar' + DM).innerHTML = "Show"; }
}

//Clear Model List
function resetModelList() {
  for (var i = 1; i <= 6; i++) {
    for (var i2 = 0; i2 <= 694; i2++) {
      LModList[i][i2] = 0;
    }
  }
  document.getElementById("mList").innerHTML = '';
}
