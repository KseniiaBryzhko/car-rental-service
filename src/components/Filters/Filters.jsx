import {
  FiltersWrapper,
  InputsWrapper,
  ArrowDown,
  ArrowUp,
  ModelInput,
  Label,
  ModelInputBtn,
  ModelDropdown,
  ModelOptionListItem,
  ModelOptionList,
  InputBlock,
  PriceInput,
  PriceInputBtn,
  PriceDropdown,
  PriceOptionListItem,
  PriceOptionList,
  MileageInputWrapper,
  MileageInputLeft,
  MileageInputRight,
  SearchBtn,
} from './Filters.styled';

const Filters = () => {
  return (
    <FiltersWrapper>
      <InputsWrapper>
        <InputBlock>
          <Label htmlFor="brand">Car brand</Label>
          <ModelInput
            id="brand"
            placeholder="Enter the text"
            // onChange={handleChangeModel}
            // value={model}
            // onKeyDown={event => handleInputKeyPress(event, 'model')}
          />
          {/* <ModelInputBtn type="button" onClick={() => toggleDropdown('model')}>
            {isDropdownOpen === 'model' ? <ArrowUp /> : <ArrowDown />}
          </ModelInputBtn> */}
          <ModelInputBtn>
            <ArrowDown />
          </ModelInputBtn>
          {/* {isDropdownOpen === 'model' && (
            <ModelDropdown>
              <ModelOptionList>
                {modelOptions.map((option, idx) => (
                  <ModelOptionListItem
                    key={idx}
                    onClick={() => handleSelectModel(option.value)}
                  >
                    {option.label}
                  </ModelOptionListItem>
                ))}
              </ModelOptionList>
            </ModelDropdown>
          )} */}
        </InputBlock>
        <InputBlock>
          <Label htmlFor="price">Price/ 1 hour </Label>
          <PriceInput
            id="price"
            placeholder="To $"
            // onChange={handleChangePrice}
            // value={price}
            // onKeyDown={event => handleInputKeyPress(event, 'price')}
          />
          <PriceInputBtn>
            <ArrowDown />
          </PriceInputBtn>
          {/* <PriceInputBtn type="button" onClick={() => toggleDropdown('price')}>
            {isDropdownOpen === 'price' ? <ArrowUp /> : <ArrowDown />}
          </PriceInputBtn> */}
          {/* {isDropdownOpen === 'price' && (
            <PriceDropdown>
              <PriceOptionList>
                {priceOptions.map((option, idx) => (
                  <PriceOptionListItem
                    key={idx}
                    onClick={() => handleSelectPrice(option.value)}
                  >
                    {option.label}
                  </PriceOptionListItem>
                ))}
              </PriceOptionList>
            </PriceDropdown>
          )} */}
        </InputBlock>
        <InputBlock>
          <Label htmlFor="mileage">Сar mileage / km </Label>
          <MileageInputWrapper>
            <MileageInputLeft
              id="mileage"
              placeholder="from"
              // onChange={handleChangeStartMiles}
              // value={startMiles}
              // onKeyDown={event => handleInputKeyPress(event, 'mileage')}
            />
            <MileageInputRight
              type="number"
              // value={endMiles}
              // onChange={handleChangeEndMiles}
              // placeholder="to"
              // onKeyDown={event => handleInputKeyPress(event, 'mileage')}
            />
          </MileageInputWrapper>
        </InputBlock>
        <SearchBtn type="button">Search</SearchBtn>
        {/* <SearchBtn type="button" onClick={search}>
          Search
        </SearchBtn>*/}
      </InputsWrapper>
      {/* <CarList cars={paginatedCars} />
      {filteredCars.length > 0 ? (
        totalPages !== page && <LoadMoreBtn onClick={getPage} />
      ) : (
        <NoCars />
      )} */}
    </FiltersWrapper>
  );
};

export default Filters;
