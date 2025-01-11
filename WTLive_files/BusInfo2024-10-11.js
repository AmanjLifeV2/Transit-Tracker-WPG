var BusModel = []; var BusLength = []; var SignColor = []; var ExtraBusInfo = [];

for (var i = 0; i <= 999; i++) {
  BusModel[i] = "";
  BusLength[i] = "";
  SignColor[i] = "";
  ExtraBusInfo[i] = "";
}

//Set Bus Models
for (var i = 930; i <= 949; i++) { BusModel[i] = "D30LF"; }

for (var i = 201; i <= 281; i++) { BusModel[i] = "D40LF"; }
for (var i = 510; i <= 599; i++) { BusModel[i] = "D40LF"; }
for (var i = 641; i <= 664; i++) { BusModel[i] = "D40LF"; }

for (var i = 101; i <= 169; i++) { BusModel[i] = "D40LFR"; }
for (var i = 601; i <= 640; i++) { BusModel[i] = "D40LFR"; }
for (var i = 701; i <= 830; i++) { BusModel[i] = "D40LFR"; }

for (var i = 170; i <= 199; i++) { BusModel[i] = "XD40"; }
for (var i = 300; i <= 369; i++) { BusModel[i] = "XD40"; }
for (var i = 401; i <= 471; i++) { BusModel[i] = "XD40"; }
for (var i = 831; i <= 888; i++) { BusModel[i] = "XD40"; }
for (var i = 900; i <= 919; i++) { BusModel[i] = "XD40"; }
for (var i = 955; i <= 999; i++) { BusModel[i] = "XD40"; }

for (var i = 371; i <= 398; i++) { BusModel[i] = "XD60"; }
for (var i = 475; i <= 497; i++) { BusModel[i] = "XD60"; }

for (var i = 284; i <= 287; i++) { BusModel[i] = "XHE40"; }
for (var i = 288; i <= 291; i++) { BusModel[i] = "XE40"; }
for (var i = 292; i <= 295; i++) { BusModel[i] = "XHE60"; }
for (var i = 296; i <= 299; i++) { BusModel[i] = "XE60"; }


//Set Bus Lengths
for (var i = 930; i <= 949; i++) { BusLength[i] = "30 Feet"; }

for (var i = 201; i <= 281; i++) { BusLength[i] = "40 Feet"; }
for (var i = 510; i <= 599; i++) { BusLength[i] = "40 Feet"; }
for (var i = 641; i <= 664; i++) { BusLength[i] = "40 Feet"; }

for (var i = 101; i <= 169; i++) { BusLength[i] = "40 Feet"; }

for (var i = 601; i <= 640; i++) { BusLength[i] = "40 Feet"; }
for (var i = 701; i <= 830; i++) { BusLength[i] = "40 Feet"; }

for (var i = 170; i <= 199; i++) { BusLength[i] = "40 Feet"; }
for (var i = 300; i <= 369; i++) { BusLength[i] = "40 Feet"; }
for (var i = 401; i <= 471; i++) { BusLength[i] = "40 Feet"; }
for (var i = 831; i <= 888; i++) { BusLength[i] = "40 Feet"; }
for (var i = 900; i <= 919; i++) { BusLength[i] = "40 Feet"; }
for (var i = 955; i <= 999; i++) { BusLength[i] = "40 Feet"; }

for (var i = 371; i <= 398; i++) { BusLength[i] = "60 Feet"; }
for (var i = 475; i <= 497; i++) { BusLength[i] = "60 Feet"; }

for (var i = 284; i <= 291; i++) { BusLength[i] = "40 Feet"; }
for (var i = 292; i <= 299; i++) { BusLength[i] = "60 Feet"; }

//Set Sign Colours
for (var i = 101; i <= 999; i++) { SignColor[i] = "White"; }

for (var i = 101; i <= 281; i++) { SignColor[i] = "Orange"; }
for (var i = 300; i <= 435; i++) { SignColor[i] = "Orange"; }
for (var i = 510; i <= 888; i++) { SignColor[i] = "Orange"; }
for (var i = 930; i <= 949; i++) { SignColor[i] = "Orange"; }

//Set Extra Info
for (var i = 641; i <= 664; i++) { ExtraBusInfo[i] = "<br />Ex-Calgary"; }

ExtraBusInfo[210] = "<br />Old Paint";
ExtraBusInfo[213] = "<br />Old Paint";
ExtraBusInfo[224] = "<br />Old Paint";
ExtraBusInfo[232] = "<br />Old Paint";
ExtraBusInfo[236] = "<br />Old Paint";
ExtraBusInfo[243] = "<br />Old Paint";
ExtraBusInfo[252] = "<br />Old Paint";
ExtraBusInfo[253] = "<br />Old Paint";
ExtraBusInfo[271] = "<br />Old Paint";
ExtraBusInfo[273] = "<br />Old Paint";
ExtraBusInfo[275] = "<br />Old Paint";
ExtraBusInfo[278] = "<br />Old Paint";
ExtraBusInfo[279] = "<br />Old Paint";
ExtraBusInfo[281] = "<br />Old Paint";
ExtraBusInfo[587] = "<br />Old Paint";

ExtraBusInfo[701] = "<br />White Front";
ExtraBusInfo[715] = "<br />White Front";
ExtraBusInfo[731] = "<br />White Front";
ExtraBusInfo[735] = "<br />White Front";
ExtraBusInfo[776] = "<br />White Front";
ExtraBusInfo[777] = "<br />White Front";
ExtraBusInfo[798] = "<br />White Front";

ExtraBusInfo[177] = "<br />Safe Work Wrap";
ExtraBusInfo[195] = "<br />U of M Wrap";
ExtraBusInfo[329] = "<br />LC Taylor Wrap";
ExtraBusInfo[337] = "<br />Classic FLS Wrap";
ExtraBusInfo[834] = "<br />HVAC Wrap";
ExtraBusInfo[836] = "<br />U of M Wrap";
ExtraBusInfo[847] = "<br />U of M Wrap";
