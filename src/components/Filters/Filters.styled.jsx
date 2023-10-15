// import styled from 'styled-components';
// import { FiChevronDown } from 'react-icons/fi';
// import { FiChevronUp } from 'react-icons/fi';

// export const FiltersWrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   padding: 50px 0px 80px;
// `;

// export const InputsWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-end;
//   gap: 18px;
// `;

// export const InputBlock = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// export const ModelInputBtn = styled.button`
//   position: absolute;
//   padding: 0;
//   right: 14px;
//   top: 40px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   outline: none;
// `;

// export const ModelDropdown = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   top: 100%;
//   width: 224px;
//   max-height: 272px;
//   overflow: auto;
//   padding: 8px 8px 8px 18px;

//   z-index: 100;
//   border-radius: 14px;
//   border: 1px solid rgba(18, 20, 23, 0.05);
//   background: #fff;
//   box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
//   margin-top: 3px;

//   ::-webkit-scrollbar {
//     width: 8px;
//     height: 130px;
//   }

//   ::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: rgba(18, 20, 23, 0.05);
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background-color: #fff;
//   }

//   ::-webkit-scrollbar-track {
//     background-color: #fff;
//   }
// `;

// export const ModelOptionList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
//   width: 120px;
//   margin-right: auto;
// `;

// export const ModelOptionListItem = styled.li`
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 20px;
//   color: rgba(18, 20, 23, 0.2);
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;

//   &:hover {
//     color: rgba(18, 20, 23, 0.8);
//   }
// `;

// export const Label = styled.label`
//   margin-bottom: 8px;
//   color: #8a8a89;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.29;
// `;

// export const ModelInput = styled.input`
//   display: flex;
//   width: 224px;
//   padding: 14px 14px 14px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   border-radius: 14px;
//   background: #f7f7fb;
//   border: none;
//   outline: none;
//   color: #121417;
//   font-size: 18px;
//   font-weight: 500;
//   line-height: 1.11;

//   /* &::placeholder {
//     color: #121417;
//   } */
// `;

// export const ArrowDown = styled(FiChevronDown)`
//   width: 20px;
//   height: 20px;
//   margin: 0;
//   color: #121417;
// `;

// export const ArrowUp = styled(FiChevronUp)`
//   width: 20px;
//   height: 20px;
//   margin: 0;

//   color: #121417;
// `;

// //-------------PriceInput

// export const PriceInputBtn = styled.button`
//   position: absolute;
//   padding: 0;
//   right: 14px;
//   top: 40px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   outline: none;
// `;

// export const PriceDropdown = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   top: 100%;
//   max-height: 188px;
//   overflow: auto;
//   padding: 8px 8px 8px 18px;

//   z-index: 100;
//   border-radius: 14px;
//   border: 1px solid rgba(18, 20, 23, 0.05);
//   background: #fff;
//   box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
//   margin-top: 3px;

//   ::-webkit-scrollbar {
//     width: 8px;
//     height: 66px;
//   }

//   ::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: rgba(18, 20, 23, 0.05);
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background-color: #fff;
//   }

//   ::-webkit-scrollbar-track {
//     background-color: #fff;
//   }
// `;

// export const PriceOptionList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
//   width: 120px;
//   margin-right: auto;
// `;

// export const PriceOptionListItem = styled.li`
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 20px;
//   color: rgba(18, 20, 23, 0.2);
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;

//   &:hover {
//     color: rgba(18, 20, 23, 0.8);
//   }
// `;

// export const PriceInput = styled.input`
//   display: flex;
//   width: 125px;
//   padding: 14px 14px 14px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   border-radius: 14px;
//   background: #f7f7fb;
//   border: none;
//   outline: none;
//   color: #121417;
//   font-size: 18px;
//   font-weight: 500;
//   line-height: 1.11;

//   /* &::placeholder {
//     color: #121417;
//   } */
// `;

// //-------------MileageInput

// export const MileageInputWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const MileageInputLeft = styled.input`
//   display: flex;
//   width: 100px;
//   padding: 14px 14px 14px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   border-top-left-radius: 14px;
//   border-bottom-left-radius: 14px;
//   border-right: 1px solid rgba(138, 138, 137, 0.2);
//   background: #f7f7fb;
//   border: none;
//   outline: none;
//   color: #121417;
//   font-size: 18px;
//   font-weight: 500;
//   line-height: 1.11;

//   /* &::placeholder {
//     color: #121417;
//   } */
// `;

// export const MileageInputRight = styled.input`
//   display: flex;
//   width: 100px;
//   padding: 14px 14px 14px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   border-top-right-radius: 14px;
//   border-bottom-right-radius: 14px;
//   border-left: 1px solid rgba(138, 138, 137, 0.2);
//   background: #f7f7fb;
//   border: none;
//   outline: none;
//   color: #121417;
//   font-size: 18px;
//   font-weight: 500;
//   line-height: 1.11;

//   /* &::placeholder {
//     color: #121417;
//   } */
// `;

// //-----Other elements

// export const SearchBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 14px 44px;
//   color: #ffffff;
//   font-family: Manrope;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.43;
//   border-radius: 12px;
//   background: #3470ff;
//   border: none;
//   cursor: pointer;
//   outline: none;
//   transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover {
//     background: #0b44cd;
//   }
// `;
