var ToReplace = []; var Replacement = []; var RepRt = [];

for (var i = 1; i <= 100; i++) { RepRt[i] = "0"; }

ToReplace[1] = "Downtown (City Hall)"; Replacement[1] = "City Hall";
ToReplace[2] = "St. Vital Centre via River Road"; Replacement[2] = "St. Vital Centre";
ToReplace[3] = "Centre Street via Bridgwater"; Replacement[3] = "Bridgwater Centre";
ToReplace[4] = "Wolseley-Provencher via Provencher"; Replacement[4] = "Wolseley via Provencher";
ToReplace[5] = "WalMart via McPhillips"; Replacement[5] = "Templeton via McPhillips";
ToReplace[6] = "via Leila"; Replacement[6] = "Walmart via Leila";
ToReplace[7] = "Whyte Ridge via Scurfield"; Replacement[7] = "Whyte Ridge";
ToReplace[8] = "Seel Station via Fort Garry Industrial Park"; Replacement[8] = "Seel Station";
ToReplace[9] = "Kenaston via Fort Garry Industrial Park"; Replacement[9] = "Henlow & Scurfield";
ToReplace[10] = "Whyte Ridge via Chevrier"; Replacement[10] = "Whyte Ridge";
ToReplace[11] = "Windermere via Pembina"; Replacement[11] = "Windermere";
ToReplace[12] = "Beaumont station via Industrial Park"; Replacement[12] = "Beaumont Station";
ToReplace[13] = "Kenaston Common via Industrial Park"; Replacement[13] = "Kenaston Common";
ToReplace[14] = "Outlet Mall via Wilkes"; Replacement[14] = "Outlet Mall";
ToReplace[15] = "Logan via Sherbrook"; Replacement[15] = "Logan";
ToReplace[16] = "Beaumont Station via Stafford"; Replacement[16] = "Beaumont Station";
ToReplace[17] = "Fort and Assiniboine via Maryland"; Replacement[17] = "Fort & Assiniboine";
ToReplace[18] = "City Hall via Sherbrook"; Replacement[18] = "City Hall";
ToReplace[19] = "Maples via Health Sciences Centre"; Replacement[19] = "Maples";
ToReplace[20] = "U of Manitoba"; Replacement[20] = "University of Manitoba";
ToReplace[21] = "Westdale via Kenaston"; Replacement[21] = "Westdale";
ToReplace[22] = "Polo Park via Kenaston"; Replacement[22] = "Polo Park";
ToReplace[23] = "Portage & Tylehurst via Kenaston"; Replacement[23] = "Portage & Tylehurst";
ToReplace[24] = "Whyte Ridge via Kenaston Common"; Replacement[24] = "Whyte Ridge";
ToReplace[25] = "Markham Station via Richmond West"; Replacement[25] = "Markham Station";
ToReplace[26] = "University of Manitoba via Richmond West"; Replacement[26] = "University of Manitoba";
ToReplace[27] = "University of Manitoba via Killarney"; Replacement[27] = "U. of Manitoba via Killarney";
ToReplace[28] = "University of Manitoba via Dalhousie"; Replacement[28] = "U. of Manitoba via Dalhousie";
ToReplace[29] = "University of Manitoba via Downtown"; Replacement[29] = "University of Manitoba";
ToReplace[30] = "Fort Garry Industrial Park via Lindenwoods East"; Replacement[30] = "Fort Garry Industrial";
ToReplace[31] = "Seel Station via Lindenwoods East"; Replacement[31] = "Seel Station";
ToReplace[32] = "Seel Station via Wildwood"; Replacement[32] = "Seel Station";
ToReplace[33] = "Fort Garry Industrial Park via Wildwood"; Replacement[33] = "Fort Garry Industrial";
ToReplace[34] = "Kenaston via Lindenwoods West"; Replacement[34] = "Kenaston Walmart";
ToReplace[35] = "Beaumont Station via Lindenwoods West"; Replacement[35] = "Beaumont Station";
ToReplace[36] = "St.Vital Centre via Meadowood"; Replacement[36] = "St. Vital Centre via Meadowood";
ToReplace[37] = "St.Vital Centre"; Replacement[37] = "St. Vital Centre";
ToReplace[38] = "Paterson Loop via Southdale"; Replacement[38] = "Windsor Park";
ToReplace[39] = "Island Lakes via Southdale Centre"; Replacement[39] = "Island Lakes";
ToReplace[40] = "Plaza Dr via St. Vital Centre"; Replacement[40] = "Plaza Drive";
ToReplace[41] = "St.Norbert"; Replacement[41] = "St. Norbert";
ToReplace[42] = "River Heights via Wellington Crescent"; Replacement[42] = "River Heights";
ToReplace[43] = "Omands Creek via Omands Creek"; Replacement[43] = "Omands Creek";
ToReplace[44] = "Inkster Industrial Park"; Replacement[44] = "Inkster Park";
ToReplace[45] = "Inkster Industrial Park via"; Replacement[45] = "Inkster Park";
ToReplace[46] = "Plessis & Regent"; Replacement[46] = "Kildonan Place";
ToReplace[47] = "St.Charles"; Replacement[47] = "St. Charles";
ToReplace[48] = "Fort & Portage"; Replacement[48] = "Main & Pioneer"; RepRt[48] = "20";
ToReplace[49] = "Betournay at Speers"; Replacement[49] = "Betournay & Speers";
ToReplace[50] = "University of Winnipeg"; Replacement[50] = "Downtown";
ToReplace[51] = "University of Winnipeg via Dakota"; Replacement[51] = "Downtown via Dakota";
ToReplace[52] = "University of Winnipeg via Meadowood"; Replacement[52] = "Downtown via Meadowood";
ToReplace[53] = "Seel Station via Chevrier"; Replacement[53] = "Seel Station";
ToReplace[54] = "Balmoral Station"; Replacement[54] = "Downtown";
ToReplace[55] = "St.Anne's & Beliveau"; Replacement[55] = "St. Anne's & Beliveau";
ToReplace[56] = "Henderson"; Replacement[56] = "Henderson & Edison"; RepRt[56] = "11";
ToReplace[57] = "Henderson"; Replacement[57] = "Johnson & Henderson"; RepRt[57] = "20";
ToReplace[58] = "Whellams Lane"; Replacement[58] = "Henderson & Whellams"; RepRt[58] = "77";
ToReplace[59] = "St.Vital Center"; Replacement[59] = "St. Vital Centre";
ToReplace[60] = "Speers- Elizabeth"; Replacement[60] = "Windsor Park";
ToReplace[61] = "Speers and Elizabeth"; Replacement[61] = "Windsor Park";
ToReplace[62] = "Cathedral & Main"; Replacement[62] = "Scotia";
ToReplace[63] = "Fife"; Replacement[63] = "Inkster Park";
ToReplace[64] = "Maples via Jefferson"; Replacement[64] = "Amber Trails via Jefferson";
ToReplace[65] = "Maples via Mapleglen"; Replacement[65] = "Amber Trails via Mapleglen";
ToReplace[66] = "Downtown"; Replacement[66] = "Main & Pioneer"; RepRt[66] = "20";
ToReplace[67] = "Highbury & Southfields"; Replacement[67] = "Creek Bend"; RepRt[67] = "93";
ToReplace[68] = "Betournay-Speers"; Replacement[68] = "Windsor Park";
ToReplace[69] = "Oak Point Highway via Omands Creek"; Replacement[69] = "Oak Point";
ToReplace[70] = "Mountain and Fife"; Replacement[70] = "Mountain & Fife";
ToReplace[71] = "City Hall"; Replacement[71] = "Downtown"; RepRt[71] = "11";
ToReplace[72] = "City Hall"; Replacement[72] = "Downtown"; RepRt[72] = "21";
ToReplace[73] = "City Hall"; Replacement[73] = "Downtown"; RepRt[73] = "22";
ToReplace[74] = "City Hall"; Replacement[74] = "Downtown"; RepRt[74] = "24";
ToReplace[75] = "City Hall"; Replacement[75] = "Downtown"; RepRt[75] = "25";
ToReplace[76] = "City Hall"; Replacement[76] = "Downtown"; RepRt[76] = "28";
ToReplace[77] = "City Hall"; Replacement[77] = "Downtown"; RepRt[77] = "31";
ToReplace[78] = "City Hall"; Replacement[78] = "Downtown"; RepRt[78] = "58";
ToReplace[79] = "City Hall"; Replacement[79] = "Downtown"; RepRt[79] = "67";
ToReplace[80] = "City Hall"; Replacement[80] = "Downtown"; RepRt[80] = "35";
ToReplace[81] = "Thompson & Ness"; Replacement[81] = "Strauss Drive"; RepRt[81] = "83";
ToReplace[82] = "Garden City Centre via Jefferson"; Replacement[82] = "Garden City via Jefferson"; RepRt[82] = "18";
ToReplace[83] = "Speers - Elizabeth"; Replacement[83] = "Speers & Elizabeth"; RepRt[83] = "50";
//ToReplace[84] = "Downtown"; Replacement[84] = "Portage & Garry"; RepRt[84] = "19";
ToReplace[85] = "Lakewood at Vermillion"; Replacement[85] = "Southdale Centre"; RepRt[85] = "75";
ToReplace[86] = "via Logan"; Replacement[86] = "RRC Polytech via Logan"; RepRt[86] = "19";
ToReplace[87] = "via Notre Dame"; Replacement[87] = "RRC Polytech via Notre Dame"; RepRt[87] = "19";
ToReplace[88] = "via Autumnwood"; Replacement[88] = "Windsor Park via Autumnwood"; RepRt[88] = "19";
ToReplace[89] = "via Drake"; Replacement[89] = "Windsor Park via Drake"; RepRt[89] = "19";
ToReplace[90] = "Inkster"; Replacement[90] = "Inkster Park via Inkster"; RepRt[90] = "15";
ToReplace[91] = "Riverbend and Main"; Replacement[91] = "Rivergrove & Main"; RepRt[91] = "330";
