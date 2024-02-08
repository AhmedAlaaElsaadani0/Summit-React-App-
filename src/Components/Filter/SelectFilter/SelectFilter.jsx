import React from 'react'
import style from "./select.module.css"
import ApiManger from '../../JsClasses/apiManager.js';
export default function SelectFilter() {
    
    // this function to get the value of search input and set it to govId
    const handleSearchByGovId = (e) => {
        e.preventDefault();
        // resetPage();
        clearAreaSelector();
        clearRegionsSelector();
        ApiManger.getAreasOfGov(e.target.value).then((response) => {
            appendChildToAreasSelector(response);
        });
    }
    // this function to get the value of search input and set it to areaId and get all apartments by areaId
    const handleSearchByAreaId = (e) => {
        e.preventDefault();
        // resetPage();
        clearRegionsSelector();
        ApiManger.getRegionsOfArea(e.target.value).then((response) => {
            if (response.code != 401)
                appendChildToRegionsSelector(response);
            else handleDisplayNoneForSelectorRegions();
        });
        // setApartments([]);
    }
    // this function to get the value of search input and set it to regionId and get all apartments by regionId
    const handleSearchByRegionId = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-100'>
            <div className={'py-1 rounded-3 ' + style.borderBottomSelect}>
                <select
                      onChange={handleSearchByGovId} onKeyDown={handleSearchByGovId} 
                    name='Gov' className={'form-select-Amoor fw-bold  mt-3 px-3 py-2 rounded-5 ' + style.borderBottomSelect} id='selectorGovs'>
                    <option value="" selected disabled>All Governorates</option>
                    <option value="6">Cairo</option>
                    <option value="11">Giza</option>

                </select>
            </div>

            <div className={'py-1 rounded-3 ' + style.borderBottomSelect}>
                <select
                       onChange={handleSearchByAreaId} onKeyDown={handleSearchByAreaId} 
                    name='Areas' className={'form-select-Amoor mt-3  px-3 py-2 rounded-5  ' + style.borderBottomSelect} id='selectorAreas'>
                    <option value="" selected disabled>All avaliable  Areas</option>
                </select>
            </div>
            <div className={'py-1 rounded-3 ' + style.borderBottomSelect}>
                <select
                      onChange={handleSearchByRegionId}
                    name='Regions' className={'form-select-Amoor mt-3 px-3 py-2 rounded-5  ' + style.borderBottomSelect} id='selectorRegions'>
                    <option value="" selected disabled>All Regions</option>
                </select>
            </div>
        </div>
    )
}

/* Helper Functions */
function creatDefaultELementInSelector(text) {
    let option = document.createElement('option');
    option.value = "";
    option.selected = true;
    // option.disabled = true;
    option.innerHTML = text;
    return option;
  }
  
  // this function to clear the options of selector when we change the value of selector
  const clearAreaSelector = () => {
    const selector = document.querySelector('#selectorAreas');
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
  // this function to clear options of selector when we change the value of selector
  const clearRegionsSelector = () => {
    const selectorRegions = document.querySelector('#selectorRegions');
    while (selectorRegions.firstChild) {
      selectorRegions.removeChild(selectorRegions.firstChild);
    }
  }
  
  
  // this function to append Child to Areas Selector
  const appendChildToAreasSelector = (response) => {
    let areas = response
    let selector = document.querySelector('#selectorAreas');
    let option = creatDefaultELementInSelector("All avaliable  Areas");
    selector.append(option);
    selector.style.display = 'block';
    areas.forEach((area) => {
      let option = document.createElement('option');
      option.value = area.id;
      option.innerHTML = area.name;
      selector.appendChild(option);
    })
  }
  // this function to append Child to Regions Selector
  
  const appendChildToRegionsSelector = (response) => {
    let regions = response;
    let selector = document.querySelector('#selectorRegions');
    let option = creatDefaultELementInSelector("All avaliable Regions");
    selector.append(option);
    selector.style.display = 'block';
    regions?.forEach((region) => {
      let option = document.createElement('option');
      option.value = region.id;
      option.innerHTML = region.name;
      selector.appendChild(option);
    })
  }
  //this function will display none the Regions selector if user select the default option in Areas Selector
  const handleDisplayNoneForSelectorRegions = () => {
    let selector = document.querySelector('#selectorRegions');
    selector.style.display = 'none';
  }