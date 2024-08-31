import React from "react";
import style from "./select.module.css";
import ApiManger from "../../JsClasses/apiManager.js";
export default function SelectFilter({ t, i18n, handleOnChangeSelector }) {
  // this function to get the value of search input and set it to govId
  const handleSearchByGovId = (e) => {
    e.preventDefault();
    clearAreaSelector();
    clearRegionsSelector();
    handleOnChangeSelector("", "", e.target.value);
    if (e.target.value != "") {
      ApiManger.getAreasOfGov(e.target.value).then((response) => {
        appendChildToAreasSelector(response);
      });
      handleResetSelectorRegions();
    } else {
      handleResetSelectorAreas();
      handleResetSelectorRegions();
    }
  };
  // this function to get the value of search input and set it to areaId and get all apartments by areaId
  const handleSearchByAreaId = (e) => {
    e.preventDefault();
    clearRegionsSelector();
    handleOnChangeSelector("", e.target.value);
    ApiManger.getRegionsOfArea(e.target.value).then((response) => {
      if (response.code != 401) appendChildToRegionsSelector(response);
      else handleResetSelectorRegions();
    });
    // setApartments([]);
  };
  // this function to get the value of search input and set it to regionId and get all apartments by regionId
  const handleSearchByRegionId = (e) => {
    e.preventDefault();
    handleOnChangeSelector(e.target.value);
  };

  /* Helper Functions */
  function creatDefaultELementInSelector(text) {
    let option = document.createElement("option");
    option.value = "";
    option.selected = true;
    // option.disabled = true;
    option.innerHTML = text;
    return option;
  }

  // this function to clear the options of selector when we change the value of selector
  const clearAreaSelector = () => {
    const selector = document.querySelector("#selectorAreas");
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  };
  // this function to clear options of selector when we change the value of selector
  const clearRegionsSelector = () => {
    const selectorRegions = document.querySelector("#selectorRegions");
    while (selectorRegions.firstChild) {
      selectorRegions.removeChild(selectorRegions.firstChild);
    }
  };

  // this function to append Child to Areas Selector
  const appendChildToAreasSelector = (response) => {
    let areas = response;
    let selector = document.querySelector("#selectorAreas");
    let option = creatDefaultELementInSelector(t("Area Selc"));
    selector.append(option);
    selector.style.display = "block";
    areas.forEach((area) => {
      let option = document.createElement("option");
      option.value = area.id;
      option.innerHTML = area[i18n.language == "en" ? "name" : "arName"];
      selector.appendChild(option);
    });
  };
  // this function to append Child to Regions Selector

  const appendChildToRegionsSelector = (response) => {
    let regions = response;
    let selector = document.querySelector("#selectorRegions");
    let option = creatDefaultELementInSelector(t("Region Selc"));
    selector.append(option);
    selector.style.display = "block";
    regions?.forEach((region) => {
      let option = document.createElement("option");
      option.value = region.id;
      option.innerHTML = region[i18n.language == "en" ? "name" : "arName"];
      selector.appendChild(option);
    });
  };
  //this function will Reset the Regions selector if user select the default option in Areas Selector
  const handleResetSelectorRegions = () => {
    let selector = document.querySelector("#selectorRegions");
    let option = creatDefaultELementInSelector(t("Region Selc"));
    selector.append(option);
  };
  //this functio will reset the Areas Selector if user select the default option in Govs Selector
  const handleResetSelectorAreas = () => {
    let selector = document.querySelector("#selectorAreas");
    let option = creatDefaultELementInSelector(t("Area Selc"));
    selector.append(option);
  };

  return (
    <div className="w-100">
      <div className={"py-1 rounded-3  " + style.borderBottomSelect}>
        <select
          onChange={handleSearchByGovId}
          onKeyDown={handleSearchByGovId}
          name="govId"
          className={
            "form-select-Amoor fw-bold  mt-3 px-3 py-2 rounded-5 " +
            style.borderBottomSelect
          }
          id="selectorGovs"
        >
          <option value="" selected>
            {t("Gov Selc")}
          </option>
          <option value="1">{t("cities.alexandria")}</option>
          <option value="2">{t("cities.portsaid")}</option>
          <option value="3">{t("cities.suez")}</option>
          <option value="4">{t("cities.damietta")}</option>
          <option value="5">{t("cities.dakahlia")}</option>
          <option value="6">{t("cities.cairo")}</option>
          <option value="7">{t("cities.sharkia")}</option>
          <option value="8">{t("cities.qalyubia")}</option>
          <option value="9">{t("cities.kafrelsheikh")}</option>
          <option value="10">{t("cities.gharbia")}</option>
          <option value="11">{t("cities.giza")}</option>
          <option value="12">{t("cities.monufia")}</option>
          <option value="13">{t("cities.beheira")}</option>
          <option value="14">{t("cities.ismailia")}</option>
          <option value="15">{t("cities.benisuef")}</option>
          <option value="16">{t("cities.fayoum")}</option>
          <option value="17">{t("cities.minya")}</option>
          <option value="18">{t("cities.asyut")}</option>
          <option value="19">{t("cities.sohag")}</option>
          <option value="20">{t("cities.qena")}</option>
          <option value="21">{t("cities.aswan")}</option>
          <option value="22">{t("cities.luxor")}</option>
          <option value="23">{t("cities.redsea")}</option>
          <option value="24">{t("cities.newvalley")}</option>
          <option value="25">{t("cities.matrouh")}</option>
          <option value="26">{t("cities.northsinai")}</option>
          <option value="27">{t("cities.southsinai")}</option>
        </select>
      </div>

      <div className={"py-1 rounded-3 " + style.borderBottomSelect}>
        <select
          onChange={handleSearchByAreaId}
          onKeyDown={handleSearchByAreaId}
          name="areaId"
          className={
            "form-select-Amoor mt-3  px-3 py-2 rounded-5  " +
            style.borderBottomSelect
          }
          id="selectorAreas"
        >
          <option value="" selected disabled>
            {t("Area Selc")}
          </option>
        </select>
      </div>
      <div className={"py-1 rounded-3 " + style.borderBottomSelect}>
        <select
          onChange={handleSearchByRegionId}
          name="regionId"
          className={
            "form-select-Amoor mt-3 px-3 py-2 rounded-5  " +
            style.borderBottomSelect
          }
          id="selectorRegions"
        >
          <option value="" selected disabled>
            {t("Region Selc")}
          </option>
        </select>
      </div>
    </div>
  );
}
