setNavBar(barTp);

function setNavBar(barType) {
  document.getElementById("navBar").innerHTML = '';

  if (barType == 1 | barType == 2 | barType == 3 | barType == 4) {
    if (barType == 2 | barType == 3 | barType == 4) {
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/" class="dropbtn"><b>Home</b></a></div>';
    }

    document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/" class="dropbtn"><b>Tracker</b></a><div class="dropdown-content"><a href="https://www.wtlivewpg.com/Pages/Tracker/Routes/">Routes</a><a href="https://www.wtlivewpg.com/Pages/Tracker/Stops/">All Stops</a><a href="https://www.wtlivewpg.com/Pages/Tracker/NBStops/">Nearby Stops<br />(1 km)</a><a href="https://www.wtlivewpg.com/Pages/Tracker/Advisories/">Re-Routes</a><a href="https://www.wtlivewpg.com/Pages/Tracker/HowTo/">How-To</a></div></div>';

    document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Timetables/" class="dropbtn"><b>Schedules</b></a><div class="dropdown-content"><a href="https://www.wtlivewpg.com/Pages/Timetables/2024-12-15/Home.html">2024 Winter</a><a href="https://www.wtlivewpg.com/Pages/Timetables/2020-04-12/Home.html">2020 Spring</a><a href="https://www.wtlivewpg.com/Pages/Timetables/2019-12-15/Home.html">2019 Winter</a><a href="https://www.wtlivewpg.com/Pages/Timetables/2012-04-08/Home.html">2012 Spring</a><a href="https://www.wtlivewpg.com/Pages/Timetables/2010-11-21/Home.html">2010 Winter</a></div></div>';

    document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/BusHist/" class="dropbtn"><b>Bus History</b></a></div>';

    //document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Photos/" class="dropbtn">Photos (WIP)</a><div class="dropdown-content"><a href="https://www.wtlivewpg.com/Pages/Photos/D30LF/">D30LF</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40/">D40</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40i/">D40i</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LF (201-281)/">D40LF (201-281)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LF (401-504)/">D40LF (401-504)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LF (510-599)/">D40LF (510-599)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LF (641-664)/">D40LF (641-664)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LF (991-993)/">D40LF (991-993)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LFR (101-169)/">D40LFR (101-169)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LFR (601-640)/">D40LFR (601-640)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LFR (701-799)/">D40LFR (701-799)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D40LFR (800-830)/">D40LFR (800-830)</a><a href="https://www.wtlivewpg.com/Pages/Photos/D901A/">D901A</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD40 (170-199)/">XD40 (170-199)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD40 (300-369)/">XD40 (300-369)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD40 (401-435)/">XD40 (401-435)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD40 (440-471)/">XD40 (440-471)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD40 (831-888)/">XD40 (831-888)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XE40/">XE40</a><a href="https://www.wtlivewpg.com/Pages/Photos/D60LF/">D60LF</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD60 (371-398)/">XD60 (371-398)</a><a href="https://www.wtlivewpg.com/Pages/Photos/XD60 (480-499)/">XD60 (480-499)</a></div></div>';

    //document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Downloads/" class="dropbtn">Downloads</a><div class="dropdown-content"><a href="https://www.wtlivewpg.com/Downloads/WTLive.zip">WTLive (C# Version, Windows Only)</a><a href="https://www.wtlivewpg.com/Downloads/Luminator.zip">Luminator Simulator (Windows Only)</a><a href="https://www.wtlivewpg.com/Downloads/Maps.zip">Route Map Collection (.zip file)</a></div></div>';

    //document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Other/" class="dropbtn">Other</a><div class="dropdown-content"><a href="https://www.wtlivewpg.com/Pages/Rides/">Routes Ridden on YT</a></div></div>';

    if (barType == 2) {
      document.getElementById("navBar").innerHTML += '<br /><br /><div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/Routes/" class="dropbtn">Routes</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/Stops/" class="dropbtn">Stops</a></div>';
      //document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/NBStops/" class="dropbtn">Nearby Stops</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/Advisories/" class="dropbtn">Re-Routes</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/HowTo/" class="dropbtn">How-To</a></div>';
    }
    else if (barType == 3) {
      document.getElementById("navBar").innerHTML += '<br /><br /><div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/BusHist/Runs/" class="dropbtn">Run History</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/BusHist/Buses/" class="dropbtn">Bus History</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Tracker/BusHist/Missing" class="dropbtn">Missing Buses</a></div>';
    }
    else if (barType == 4) {
      document.getElementById("navBar").innerHTML += '<br /><br /><div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Timetables/2024-12-15/Home.html" class="dropbtn">Winter 2024</a></div>';
      document.getElementById("navBar").innerHTML += '<div class="dropdown"><a href="https://www.wtlivewpg.com/Pages/Timetables/2010-11-21/Home.html" class="dropbtn">Winter 2010</a></div>';
    }
  }
}