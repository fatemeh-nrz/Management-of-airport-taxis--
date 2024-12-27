// let serverUrl="https://apippc.cvtasystems.com/";
// let serverUrl=serverUrlInput.value;
let datazone = [];
let datappc = [];
let dataProdGOne = [];
let dataProdGTwo = [];
let dataProdGThere = [];
let dataProdGFour = [];
let prodServerFlag = false;
let intervalActivation = false;
let btnApplyClick = false;
let showLoadingFlagOne;
let showLoadingFlagTwo;
let showLoadingFlagThree;
let showLoadingFlagFour;
//////////////////////////////////////////////////
const grideOneSquare = document.querySelector(".gride_1");
const grideTwoSquare = document.querySelector(".gride_2");
const grideThereSquare = document.querySelector(".gride_3");
const grideFourSquare = document.querySelector(".gride_4");
/////////////////////////////////////////////////////
const MainContent = document.querySelector(".mainContent");
const BillboardMessages = document.querySelector(".billboard_Messages");
const billboardMessagesSpan = document.querySelector(
  ".billboard_Messages_Span"
);
const background = document.querySelector(".background input");
const TitleFontColor = document.querySelector(".title_font_color input");
const btnApplySetting = document.querySelector(".btn_apply");
const btnPpcUrlEdit = document.querySelector(".btn_ppc_url");
const motionDropdown = document.getElementById("motion_dropdown");
const lodingContainerOne = document.querySelector(".loading_container_one");
const lodingContainerTwo = document.querySelector(".loading_container_two");
const lodingContainerThree = document.querySelector(".loading_container_three");
const lodingContainerFour = document.querySelector(".loading_container_four");

const modalBodyPpcEditInputValue = document.querySelector(
  ".modal-body-ppc-edit-input-value"
);
// const ppcUrlInput = document.querySelector(".ppc_url_input");
const serverUrlInput = document.querySelector(".server_url_input");
const serverUrl = serverUrlInput.value;
console.log(serverUrl);

const CategoryDropdownSectionOne = document.getElementById(
  "Category_dropdown_sectionone"
);
const CategoryDropdownSectionTwo = document.getElementById(
  "Category_dropdown_sectiontwo"
);
const CategoryDropdownSectionThere = document.getElementById(
  "Category_dropdown_sectionthere"
);
const CategoryDropdownSectionFour = document.getElementById(
  "Category_dropdown_sectionfour"
);
let CategoryDropdownSectionOneValue =
  CategoryDropdownSectionOne.options[CategoryDropdownSectionOne.selectedIndex]
    .text;
let CategoryDropdownSectionTwoValue =
  CategoryDropdownSectionTwo.options[CategoryDropdownSectionTwo.selectedIndex]
    .text;
let CategoryDropdownSectionThereValue =
  CategoryDropdownSectionThere.options[
    CategoryDropdownSectionThere.selectedIndex
  ].text;
let CategoryDropdownSectionFourValue =
  CategoryDropdownSectionFour.options[CategoryDropdownSectionFour.selectedIndex]
    .text;
//////////////////////////////////////
let motionDropdownValue =
  motionDropdown.options[motionDropdown.selectedIndex].text;
/////////////////////////////////////
const SectionOne = document.querySelector(".section_one");
const SectionTwo = document.querySelector(".section_two");
const SectionThere = document.querySelector(".section_there");
const SectionFour = document.querySelector(".section_four");
const CategorySectionOneType = document.querySelector(
  ".section_one .Category_section_one"
);
/////////////////////////////////////
const CategorySectionOne = document.querySelector(
  ".section_one .Category_section_one"
);
const CaptionSectionOne = document.querySelector(".section_one .Caption");
const VehicleSectionOne = document.querySelector(".section_one .Vehicle");
const StatusSectionOne = document.querySelector(".section_one .Status");
// ///////////////////////////////////////
const CategorySectionTwo = document.querySelector(
  ".section_two .Category_section_two"
);
const CaptionSectionTwo = document.querySelector(".section_two .Caption");
const VehicleSectionTwo = document.querySelector(".section_two .Vehicle");
const StatusSectionTwo = document.querySelector(".section_two .Status");
///////////////////////////////
const CategorySectionThere = document.querySelector(
  ".section_there .Category_section_there"
);
const CaptionSectionThere = document.querySelector(".section_there .Caption");
const VehicleSectionThere = document.querySelector(".section_there .Vehicle");
const StatusSectionThere = document.querySelector(".section_there .Status");
////////////////////////
const CategorySectionFour = document.querySelector(
  ".section_four .Category_section_four"
);
const CaptionSectionFour = document.querySelector(".section_four .Caption");
const VehicleSectionFour = document.querySelector(".section_four .Vehicle");
const StatusSectionFour = document.querySelector(".section_four .Status");
const ZoonDropdown = document.getElementById("zoon_dropdown select.option");
const StatusCaptionGridOne = document.querySelector(".Status_Caption_Grid_One");
const StatusCaptionGridTwo = document.querySelector(".Status_Caption_Grid_Two");

const VehicleCaptionGridOne = document.querySelector(
  ".Vehicle_Caption_Grid_One"
);
const VehicleCaptionGridTwo = document.querySelector(
  ".Vehicle_Caption_Grid_Two"
);
const VehicleCaptionGridThere = document.querySelector(
  ".Vehicle_Caption_Grid_There"
);
const VehicleCaptionGridFour = document.querySelector(
  ".Vehicle_Caption_Grid_Four"
);

const StatusGridOne = document.querySelector(".Status_Caption_G_One");
const StatusGridTwo = document.querySelector(".Status_Caption_G_Two");
const StatusGridThere = document.querySelector(".Status_Caption_G_There");
const StatusGridFour = document.querySelector(".Status_Caption_G_Four");
const VehicleStatus = document.querySelector(".Vehicle_Status");

const StatusCaptionGridThere = document.querySelector(
  ".Status_Caption_Grid_There"
);
const StatusCaptionGridFour = document.querySelector(
  ".Status_Caption_Grid_Four"
);

const VehicleCaptionSpanGridOne = document.querySelector(
  ".Vehicle_Caption_Span_Grid_One"
);
const VehicleCaptionSpanGridTwo = document.querySelector(
  ".Vehicle_Caption_Span_Grid_Two"
);
const VehicleCaptionSpanGridThere = document.querySelector(
  ".Vehicle_Caption_Span_Grid_There"
);
const VehicleCaptionSpanGridFour = document.querySelector(
  ".Vehicle_Caption_Span_Grid_Four"
);
const BtnApplySetting = document.querySelector(".btn_apply");
const ZoonDropdownGridOne = document.getElementById("zoon_dropdown_grid_one");
const ZoonDropdownGridTwo = document.getElementById("zoon_dropdown_grid_two");
const ZoonDropdownGridThere = document.getElementById(
  "zoon_dropdown_grid_there"
);
const ZoonDropdownGridFour = document.getElementById("zoon_dropdown_grid_four");
const ModalBodyPpcInput = document.querySelector(".modal-body-ppc-input input");
const ModalBodyProdInput = document.querySelector(
  ".modal-body-prod-input input"
);
const modalBodyPpcInputValue = document.querySelector(
  ".modal-body-ppc-input-value"
);
const BtnDangerPpc = document.querySelector(".btn-danger-ppc");
const BtnDangerProd = document.querySelector(".btn-danger-prod");
const BackgroundFavcolor = document.getElementById("favcolor_background").value;
SectionOne.style.backgroundColor = background.value;
SectionTwo.style.backgroundColor = background.value;
SectionThere.style.backgroundColor = background.value;
SectionFour.style.backgroundColor = background.value;
////////////////////////
CategorySectionTwo.style.color = TitleFontColor.value;
CaptionSectionTwo.style.color = TitleFontColor.value;
VehicleSectionTwo.style.color = TitleFontColor.value;
StatusSectionTwo.style.color = TitleFontColor.value;
/////////////////////////
CategorySectionThere.style.color = TitleFontColor.value;
CaptionSectionThere.style.color = TitleFontColor.value;
VehicleSectionThere.style.color = TitleFontColor.value;
StatusSectionThere.style.color = TitleFontColor.value;
///////////////////////
CategorySectionFour.style.color = TitleFontColor.value;
CaptionSectionFour.style.color = TitleFontColor.value;
VehicleSectionFour.style.color = TitleFontColor.value;
StatusSectionFour.style.color = TitleFontColor.value;
//////////////////
CategorySectionOne.style.color = TitleFontColor.value;
CaptionSectionOne.style.color = TitleFontColor.value;
VehicleSectionOne.style.color = TitleFontColor.value;
StatusSectionOne.style.color = TitleFontColor.value;
/////////////////////////////////////
VehicleStatus.classList.add("scroll");
/////axios server data for zones//////
window.onload = function () {
  const getDataZone = {
    url: `${serverUrl}/api/billboard/zones`,
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //روش برقرری ارتباط با سرور
  axios(getDataZone)
    .then((res) => {
      datazone = res.data;
      console.log(datazone);
      showzone();
    })
    .catch((err) => {
      // Handle error
      alert("No Data Zones... :" + err);
      // Swal.fire({
      //   icon: "error",
      //   title: "No Data Zones...",
      //   text: err,
      // });
    });
  getDataBillboardmessages();
};
//تعریف متغیر showzones  یا همان  additem
let showzone = () => {
  datazone.map((item) => {
    const titleelementzone = document.createElement("span");
    const ZoneGridOneDropdownOption = document.createElement("option");
    ZoneGridOneDropdownOption.appendChild(titleelementzone);
    ZoonDropdownGridOne.add(ZoneGridOneDropdownOption);
    titleelementzone.innerHTML = item.Title;

    //////////////////////////////
  });
  ///////////////zone-dropdown-gride-two////////////
  datazone.map((item) => {
    const titleelementzone = document.createElement("span");
    const ZoneGridTwoDropdownOption = document.createElement("option");
    ZoneGridTwoDropdownOption.appendChild(titleelementzone);
    ZoonDropdownGridTwo.add(ZoneGridTwoDropdownOption);
    titleelementzone.innerHTML = item.Title;
  });
  ///////////////zone-dropdown-gride-there////////////
  datazone.map((item) => {
    const titleelementzone = document.createElement("span");
    const ZoneGridThereDropdownOption = document.createElement("option");
    ZoneGridThereDropdownOption.appendChild(titleelementzone);
    ZoonDropdownGridThere.add(ZoneGridThereDropdownOption);
    titleelementzone.innerHTML = item.Title;
  });
  ///////////////zone-dropdown-gride-four////////////
  datazone.map((item) => {
    const titleelementzone = document.createElement("span");
    const ZoneGridFourDropdownOption = document.createElement("option");
    ZoneGridFourDropdownOption.appendChild(titleelementzone);
    ZoonDropdownGridFour.add(ZoneGridFourDropdownOption);
    titleelementzone.innerHTML = item.Title;
  });
};
//////////////grig-1-changed////////////
let girdOneOptionSelectionChanged = "";
let girdOneOptionSelectionChangingCounter = 0;
grideOneSquare.addEventListener("change", () => {
  girdOneOptionSelectionChanged = "changed";
  girdOneOptionSelectionChangingCounter += 1;
  console.log(girdOneOptionSelectionChanged);
});
//////////////grig-1-changed////////////
//////////////grig-2-changed////////////
let girdTwoOptionSelectionChanged = "";
let girdTwoOptionSelectionChangingCounter = 0;
grideTwoSquare.addEventListener("change", () => {
  girdTwoOptionSelectionChanged = "changed";
  girdTwoOptionSelectionChangingCounter += 1;
  console.log(girdTwoOptionSelectionChanged);
});
//////////////grig-2-changed////////////
//////////////grig-3-changed////////////
let girdThereOptionSelectionChanged = "";
let girdThereOptionSelectionChangingCounter = 0;
grideThereSquare.addEventListener("change", () => {
  girdThereOptionSelectionChanged = "changed";
  girdThereOptionSelectionChangingCounter += 1;
  console.log(girdThereOptionSelectionChanged);
});
//////////////grig-3-changed////////////
//////////////grig-4-changed////////////
let girdFourOptionSelectionChanged = "";
let girdFourOptionSelectionChangingCounter = 0;
grideFourSquare.addEventListener("change", () => {
  girdFourOptionSelectionChanged = "changed";
  girdFourOptionSelectionChangingCounter += 1;
  console.log(girdFourOptionSelectionChanged);
});
//////////////grig-4-changed////////////

/////////////////Function Billboardmessages/////////////////////////////////

let getDataBillboardmessages = () => {
  const Billboardmessages = {
    url: `${serverUrl}/api/billboard/billboardmessages`,
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //روش برقرری ارتباط با سرور
  axios(Billboardmessages)
    .then((res) => {
      let datamessage = res.data;
      console.log(datamessage);
      console.log(res.status);
      console.log(res.data);
      var dataBillboardMessagesText = document.createElement("span");
      dataBillboardMessagesText.classList.add("dataBillboardmessages");
      if (motionDropdownValue == "Fixed") {
        dataBillboardMessagesText.style.animation = "none";
        dataBillboardMessagesText.style.marginRight = "600px";
      }
      console.log(motionDropdownValue);
      dataBillboardMessagesText.innerHTML = datamessage[0].Body;
      billboardMessagesSpan.appendChild(dataBillboardMessagesText);
    })
    .catch((err) => {
      // Handle error
      alert("Error BillboardMessages... :" + err);
      // Swal.fire({
      //   icon: "error",
      //   title: "billboardMessages...",
      //   text: err,
      // });
    });
};

billboardMessagesSpan.style.backgroundColor = "green";
/////////////////Function Billboardmessages/////////////////////////////
////////////////////////Function getDataPPCGridOne////////////////////

let getDataProdGridOne = () => {
  const getDataProdGOne = {
    url: `${serverUrl}/api/billboard/billboardapi`,
    maxBodyLength: Infinity,
    method: "post",
    data: {
      zoneCode:
        datazone[
          ZoonDropdownGridOne.options[ZoonDropdownGridOne.selectedIndex].index
        ].Code,
      category:
        CategoryDropdownSectionOne.options[
          CategoryDropdownSectionOne.selectedIndex
        ].text,
    },
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //روش برقرری ارتباط با سرور
  axios(getDataProdGOne).then((res) => {
    showLoadingOne();
    if (dataProdGOne.length > 0) {
      dataProdGOne = [];
      dataProdGOne = res.data;
    } else {
      dataProdGOne = res.data;
    }
  })
  .catch((err) => {
    // Handle error
    alert("No Data Gride 1 :" + err);
  });
};
////////////////////////Function getDataPPCGridOne/////////////////////////
/////////////////Function getDataPPCGridTwo/////////////////////////////////

let getDataProdGridTwo = () => {
  const getDataProdGTwo = {
    url: `${serverUrl}/api/billboard/billboardapi`,
    maxBodyLength: Infinity,
    method: "post",
    data: {
      zoneCode:
        datazone[
          ZoonDropdownGridTwo.options[ZoonDropdownGridTwo.selectedIndex].index
        ].Code,
      category:
        CategoryDropdownSectionTwo.options[
          CategoryDropdownSectionTwo.selectedIndex
        ].text,
    },
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //روش برقرری ارتباط با سرور
  axios(getDataProdGTwo).then((res) => {
    showLoadingTwo();
    if (dataProdGTwo.length > 0) {
      dataProdGTwo = [];
      dataProdGTwo = res.data;
    } else {
      dataProdGTwo = res.data;
    }
  })
  .catch((err) => {
    // Handle error
    alert("No Data Gride 2 :" + err);
  });
};
/////////////////Function getDataPPCGridTwo/////////////////////////////////
/////////////////Function getDataPPCGridThere///////////////////////////////
let getDataProdGridThere = () => {
  const getDataProdGThere = {
    url: `${serverUrl}/api/billboard/billboardapi`,
    maxBodyLength: Infinity,
    method: "post",
    data: {
      zoneCode:
        datazone[
          ZoonDropdownGridThere.options[ZoonDropdownGridThere.selectedIndex]
            .index
        ].Code,
      category:
        CategoryDropdownSectionThere.options[
          CategoryDropdownSectionThere.selectedIndex
        ].text,
    },
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //روش برقرری ارتباط با سرور
  axios(getDataProdGThere).then((res) => {
    showLoadingThree();
    if (dataProdGThere.length > 0) {
      dataProdGThere = [];
      dataProdGThere = res.data;
    } else {
      dataProdGThere = res.data;
    }
  })
  .catch((err) => {
    // Handle error
    alert("No Data Gride 3 :" + err);
  });
};
/////////////////Function getDataPPCGridThere/////////////////////////////////
/////////////////Function getDataPPCGridFour/////////////////////////////////
let getDataProdGridFour = () => {
  const getDataProdGFour = {
    url: `${serverUrl}/api/billboard/billboardapi`,
    method: "post",
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      zoneCode:
        datazone[
          ZoonDropdownGridFour.options[ZoonDropdownGridFour.selectedIndex].index
        ].Code,
      category:
        CategoryDropdownSectionFour.options[
          CategoryDropdownSectionFour.selectedIndex
        ].text,
    },
  };

  //روش برقرری ارتباط با سرور
  axios(getDataProdGFour).then((res) => {
    showLoadingFour();
    if (dataProdGFour.length > 0) {
      dataProdGFour = [];
      dataProdGFour = res.data;
    } else {
      dataProdGFour = res.data;
    }
  })
  .catch((err) => {
    // Handle error
    alert("No Data Gride 4 :" + err);
  });
};
/////////////////////Function getDataPPCGridFour//////////////////

///////////////////////////function data for ppc////////////////////////
// BtnDangerPpc.addEventListener("click", function () {
//   if (ModalBodyPpcInput.value == "12345678") {
//     prodServerFlag = true;
//     // console.log(dataprod);
//   } else {
//     alert("Please Enter Corect Password!");
//   }
// });
///////////////////////////function data for ppc////////////////////////
///////////////////////////function data for btnApplySetting////////////////////////
btnApplySetting.addEventListener(
  "click",
  function () {
    // if (!prodServerFlag) {
    //   window.alert("first enter password in : SEREVER > PPC");
    // } else {
    CategorySectionOne.innerHTML =
      CategoryDropdownSectionOne.options[
        CategoryDropdownSectionOne.selectedIndex
      ].text;
    CategorySectionTwo.innerHTML =
      CategoryDropdownSectionTwo.options[
        CategoryDropdownSectionTwo.selectedIndex
      ].text;
    CategorySectionThere.innerHTML =
      CategoryDropdownSectionThere.options[
        CategoryDropdownSectionThere.selectedIndex
      ].text;
    CategorySectionFour.innerHTML =
      CategoryDropdownSectionFour.options[
        CategoryDropdownSectionFour.selectedIndex
      ].text;
    if (girdOneOptionSelectionChanged === "changed") {
      showLoadingFlagOne = true;
      getDataProdGridOne();
      mapDataProdOne();
      girdOneOptionSelectionChanged = "";
    }
    if (girdTwoOptionSelectionChanged === "changed") {
      showLoadingFlagTwo = true;
      getDataProdGridTwo();
      mapDataProdTwo();
      girdTwoOptionSelectionChanged = "";
    }
    if (girdThereOptionSelectionChanged === "changed") {
      showLoadingFlagThree = true;
      getDataProdGridThere();
      mapDataProdThere();
      girdThereOptionSelectionChanged = "";
    }
    if (girdFourOptionSelectionChanged === "changed") {
      showLoadingFlagFour = true;
      getDataProdGridFour();
      mapDataProdFour();
      girdFourOptionSelectionChanged = "";
    }
    gridOneInterval();
    gridTwoInterval();
    gridThereInterval();
    gridFourInterval();
  }
  // }
);
///////////////////////////Function data for btnApplySetting//////////////
///////////////////////////Function data for prod////////////////////////

////////////////////////////setInterval-activation /////////////////////////////////

// btnPpcUrlEdit.addEventListener("click", function () {
//   if (modalBodyPpcEditInputValue.value == "12345678") {
//     // ppcUrlInput.disabled=false;
//     ppcUrlInput.innerHTML = "https://apippc.cvtasystems.com";
//   }
//   else{
//     alert("please enter correct password")
//   }
// });
/////////////////////FUNCTION - INTERVALS //////////////////////
///////////////////// INTERVALS -GRID-1 //////////////////////
let gridOneInterval = () => {
  if (girdOneOptionSelectionChangingCounter < 2 && prodServerFlag) {
    setInterval(getDataProdGridOne, 3000);
    setInterval(refreshSectionOne, 10000);
  }
};
///////////////////// INTERVALS -GRID-1 //////////////////////
///////////////////// INTERVALS -GRID-2 //////////////////////
let gridTwoInterval = () => {
  if (girdTwoOptionSelectionChangingCounter < 2 && prodServerFlag) {
    setInterval(getDataProdGridTwo, 5000);
    setInterval(refreshSectionTwo, 10000);
  }
};
///////////////////// INTERVALS -GRID-2 //////////////////////
///////////////////// INTERVALS -GRID-3 //////////////////////
let gridThereInterval = () => {
  if (girdThereOptionSelectionChangingCounter < 2 && prodServerFlag) {
    setInterval(getDataProdGridThere, 5000);
    setInterval(refreshSectionThere, 10000);
  }
};
///////////////////// INTERVALS -GRID-3 //////////////////////
///////////////////// INTERVALS -GRID-4 //////////////////////
let gridFourInterval = () => {
  if (girdFourOptionSelectionChangingCounter < 2 && prodServerFlag) {
    setInterval(getDataProdGridFour, 5000);
    setInterval(refreshSectionFour, 10000);
  }
};
///////////////////// INTERVALS -GRID-4 //////////////////////
/////////////////////FUNCTION - INTERVALS //////////////////////

/////////////////////FUNCTION - CLEAR -SECTION - GRIDS //////////////////////
///////////////////// CLEAR -SECTION - GRIDS -1 //////////////////////
let clearSectionOne = () => {
  console.log("Section 1 cleared");
  VehicleCaptionSpanGridOne.innerText = "";
  StatusCaptionGridOne.innerText = "";
};
/////////////////////CLEAR -SECTION - GRIDS -1 //////////////////////
///////////////////// CLEAR -SECTION - GRIDS -2 //////////////////////
let clearSectionTwo = () => {
  console.log("Section 2 cleared");
  VehicleCaptionSpanGridTwo.innerText = "";
  StatusCaptionGridTwo.innerText = "";
};
/////////////////////CLEAR -SECTION - GRIDS -2 //////////////////////
///////////////////// CLEAR -SECTION - GRIDS -3 //////////////////////
let clearSectionThere = () => {
  console.log("Section 3 cleared");
  VehicleCaptionSpanGridThere.innerText = "";
  StatusCaptionGridThere.innerText = "";
};
/////////////////////CLEAR -SECTION - GRIDS -3 //////////////////////
///////////////////// CLEAR -SECTION - GRIDS -4 //////////////////////
let clearSectionFour = () => {
  console.log("Section 4 cleared");
  VehicleCaptionSpanGridFour.innerText = "";
  StatusCaptionGridFour.innerText = "";
};
/////////////////////CLEAR -SECTION - GRIDS -4 //////////////////////
/////////////////////FUNCTION - CLEAR -SECTION - GRIDS //////////////////////

/////////////////////FUNCTION - REFRESH -SECTION - GRIDS //////////////////////
/////////////////////REFRESH -SECTION - GRIDS -1 //////////////////////
let refreshSectionOne = () => {
  clearSectionOne();
  mapDataProdOne();
  console.log("section  1  refreshed with new data");
};
/////////////////////CLEAR -SECTION - GRIDS -1 //////////////////////
/////////////////////CLEAR -SECTION - GRIDS -2 //////////////////////
let refreshSectionTwo = () => {
  clearSectionTwo();
  mapDataProdTwo();
  console.log("section  2  refreshed with new data");
};
/////////////////////CLEAR -SECTION - GRIDS -2 //////////////////////
/////////////////////CLEAR -SECTION - GRIDS -3 //////////////////////
let refreshSectionThere = () => {
  clearSectionThere();
  mapDataProdThere();
  console.log("section  3  refreshed with new data");
};
/////////////////////CLEAR -SECTION - GRIDS -3 //////////////////////
/////////////////////CLEAR -SECTION - GRIDS -4 //////////////////////
let refreshSectionFour = () => {
  clearSectionFour();
  mapDataProdFour();
  console.log("section  4  refreshed with new data");
};
/////////////////////CLEAR -SECTION - GRIDS -4 //////////////////////
/////////////////////FUNCTION - REFRESH -SECTION - GRIDS /////////////////////
///////////////////////////MAP -DATA-DRID-SERVER(AXIOS)////////////////
//////////////////////////mapDataProdOne////////////////////
let mapDataProdOne = () => {
  dataProdGOne.map((c) => {
    const titleelementprodVehicleCode = document.createElement("span");
    const titleelementprodStatusText = document.createElement("span");
    titleelementprodVehicleCode.classList.add("zonespanvehicle");
    titleelementprodStatusText.classList.add("zonespanstatus");
    VehicleCaptionSpanGridOne.appendChild(titleelementprodVehicleCode);
    StatusCaptionGridOne.appendChild(titleelementprodStatusText);
    titleelementprodVehicleCode.innerHTML = c.VehicleCode;
    titleelementprodStatusText.innerHTML = c.StatusText;
    if (titleelementprodStatusText.innerHTML == "Wait") {
      titleelementprodStatusText.classList.add("zonespanstatus");
    } else {
      titleelementprodStatusText.classList.add("blink_status");
      titleelementprodStatusText.style.backgroundColor = "red";
    }
  });
  console.log("section 1 data maped");
  hideLoadingOne();
};
//////////////////////////mapDataProdOne////////////////////
//////////////////////////mapDataProdTwo////////////////////
let mapDataProdTwo = () => {
  dataProdGTwo.map((c) => {
    const titleelementprodVehicleCode = document.createElement("span");
    const titleelementprodStatusText = document.createElement("span");
    titleelementprodVehicleCode.classList.add("zonespanvehicle");
    titleelementprodStatusText.classList.add("zonespanstatus");
    VehicleCaptionSpanGridTwo.appendChild(titleelementprodVehicleCode);
    StatusCaptionGridTwo.appendChild(titleelementprodStatusText);
    // StatusGridTwo.classList.add("scrollheight");
    titleelementprodVehicleCode.innerHTML = c.VehicleCode;
    titleelementprodStatusText.innerHTML = c.StatusText;
    if (titleelementprodStatusText.innerHTML == "Wait") {
      titleelementprodStatusText.classList.add("zonespanstatus");
    } else {
      titleelementprodStatusText.classList.add("blink_status");
      titleelementprodStatusText.style.backgroundColor = "red";
    }
  });
  console.log("section 2 data maped");
  hideLoadingTwo();
};
//////////////////////////mapDataProdTwo////////////////////
//////////////////////////mapDataProdThere////////////////////
let mapDataProdThere = () => {
  dataProdGThere.map((c) => {
    const titleelementprodVehicleCode = document.createElement("span");
    const titleelementprodStatusText = document.createElement("span");
    titleelementprodVehicleCode.classList.add("zonespanvehicle");
    titleelementprodStatusText.classList.add("zonespanstatus");
    VehicleCaptionSpanGridThere.appendChild(titleelementprodVehicleCode);
    StatusCaptionGridThere.appendChild(titleelementprodStatusText);
    titleelementprodVehicleCode.innerHTML = c.VehicleCode;
    titleelementprodStatusText.innerHTML = c.StatusText;
    if (titleelementprodStatusText.innerHTML == "Wait") {
      titleelementprodStatusText.classList.add("zonespanstatus");
    } else {
      titleelementprodStatusText.classList.add("blink_status");
      titleelementprodStatusText.style.backgroundColor = "red";
    }
  });
  console.log("section 3 data maped");
  hideLoadingThree();
};
//////////////////////////mapDataProdThere////////////////////
//////////////////////////mapDataProdFour////////////////////
let mapDataProdFour = () => {
  dataProdGFour.map((c) => {
    const titleelementprodVehicleCode = document.createElement("span");
    const titleelementprodStatusText = document.createElement("span");
    titleelementprodVehicleCode.classList.add("zonespanvehicle");
    titleelementprodStatusText.classList.add("zonespanstatus");
    VehicleCaptionSpanGridFour.appendChild(titleelementprodVehicleCode);
    StatusCaptionGridFour.appendChild(titleelementprodStatusText);
    titleelementprodVehicleCode.innerHTML = c.VehicleCode;
    titleelementprodStatusText.innerHTML = c.StatusText;
    if (titleelementprodStatusText.innerHTML == "Wait") {
      titleelementprodStatusText.classList.add("zonespanstatus");
    } else {
      titleelementprodStatusText.classList.add("blink_status");
      titleelementprodStatusText.style.backgroundColor = "red";
    }
  });
  console.log("section 4 data maped");
  hideLoadingFour();
};
//////////////////////////mapDataProdFour////////////////////
///////////////////////////MAP -DATA-DRID-SERVER(AXIOS)////////////////
///////////////////////////WAIT DATA-SERVER(AXIOS)////////////////
///////////////////////////WAIT DATA GRID-4//////////////////
let showLoadingOne = () => {
  if (showLoadingFlagOne) {
    lodingContainerOne.style.display = "flex";
    showLoadingFlagOne = false;
  }
};

let hideLoadingOne = () => {
  lodingContainerOne.style.display = "none";
};
///////////////////////////WAIT DATA GRID-1//////////////////
///////////////////////////WAIT DATA GRID-2//////////////////
let showLoadingTwo = () => {
  if (showLoadingFlagTwo) {
    lodingContainerTwo.style.display = "flex";
    showLoadingFlagTwo = false;
  }
};

let hideLoadingTwo = () => {
  lodingContainerTwo.style.display = "none";
};
///////////////////////////WAIT DATA GRID-2//////////////////
///////////////////////////WAIT DATA GRID-3//////////////////

let showLoadingThree = () => {
  if (showLoadingFlagThree) {
    lodingContainerThree.style.display = "flex";
    showLoadingFlagThree = false;
  }
};

let hideLoadingThree = () => {
  lodingContainerThree.style.display = "none";
};
///////////////////////////WAIT DATA GRID-3//////////////////
///////////////////////////WAIT DATA GRID-4//////////////////

let showLoadingFour = () => {
  if (showLoadingFlagFour) {
    lodingContainerFour.style.display = "flex";
    showLoadingFlagFour = false;
  }
};

let hideLoadingFour = () => {
  lodingContainerFour.style.display = "none";
};
///////////////////////////WAIT DATA GRID-4//////////////////
///////////////////////////WAIT DATA-SERVER(AXIOS)////////////////
