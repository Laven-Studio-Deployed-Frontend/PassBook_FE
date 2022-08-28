"use strict";
(self["webpackChunktemplate_assets"] = self["webpackChunktemplate_assets"] || []).push([["src_www_pages_detail-collections_index_jsx"],{

/***/ "./src/www/pages/detail-collections/components/fillter-collection/index.jsx":
/*!**********************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/fillter-collection/index.jsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
// import { Container } from '@mui/material';
const left_fillter_1 = __importDefault(__webpack_require__(/*! ../left-fillter */ "./src/www/pages/detail-collections/components/left-fillter/index.jsx"));
const right_fillter_1 = __importDefault(__webpack_require__(/*! ../right-fillter */ "./src/www/pages/detail-collections/components/right-fillter/index.jsx"));
const fillter_elements_1 = __webpack_require__(/*! ./fillter-elements */ "./src/www/pages/detail-collections/components/fillter-collection/fillter-elements.js");
function FillterEle() {
    const [expanded, setExpanded] = react_1.default.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (react_1.default.createElement(fillter_elements_1.Container, null,
        react_1.default.createElement(left_fillter_1.default, null),
        react_1.default.createElement(right_fillter_1.default, null)));
}
exports["default"] = FillterEle;


/***/ }),

/***/ "./src/www/pages/detail-collections/components/left-fillter/index.jsx":
/*!****************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/left-fillter/index.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ArrowBack_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js"));
const AccessibleForward_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/AccessibleForward */ "./node_modules/@mui/icons-material/AccessibleForward.js"));
const icons_material_1 = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
const CurrencyBitcoin_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/CurrencyBitcoin */ "./node_modules/@mui/icons-material/CurrencyBitcoin.js"));
const FormControlLabel_1 = __importDefault(__webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/index.js"));
const Checkbox_1 = __importDefault(__webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js"));
const AttachFile_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/AttachFile */ "./node_modules/@mui/icons-material/AttachFile.js"));
const left_fillter_element_1 = __webpack_require__(/*! ./left-fillter-element */ "./src/www/pages/detail-collections/components/left-fillter/left-fillter-element.js");
function LeftFillterEle() {
    const [show, setShow] = react_2.useState(false);
    const [isToggleDetails, setIsToggleDetails] = react_2.useState(true);
    const [isToggleDetails1, setIsToggleDetails1] = react_2.useState(true);
    const [isToggleDetails2, setIsToggleDetails2] = react_2.useState(true);
    const [isToggleDetails3, setIsToggleDetails3] = react_2.useState(true);
    const [isToggleDetails4, setIsToggleDetails4] = react_2.useState(true);
    const [isToggleDetails5, setIsToggleDetails5] = react_2.useState(true);
    const [isSelect, setSelection] = react_2.useState(false);
    const handleToggle = (type) => {
        if (type === 'status') {
            setIsToggleDetails((prev) => !prev);
        }
        else if (type === 'price') {
            setIsToggleDetails1((prev) => !prev);
        }
        else if (type === 'chains') {
            setIsToggleDetails2((prev) => !prev);
        }
        else if (type === 'sale-in') {
            setIsToggleDetails3((prev) => !prev);
        }
        else if (type === 'background') {
            setIsToggleDetails4((prev) => !prev);
        }
        else if (type === 'clothes') {
            setIsToggleDetails5((prev) => !prev);
        }
    };
    return show ? (react_1.default.createElement(left_fillter_element_1.LeftBox, null,
        react_1.default.createElement(left_fillter_element_1.FilltersOn, { onClick: () => setShow(true) },
            react_1.default.createElement(left_fillter_element_1.ScrollSelect, null,
                react_1.default.createElement(left_fillter_element_1.Button, null)),
            react_1.default.createElement(left_fillter_element_1.ScrollCheckBox, null)))) : (react_1.default.createElement(left_fillter_element_1.LeftBox, null,
        react_1.default.createElement(left_fillter_element_1.FilltersOff, null,
            react_1.default.createElement(left_fillter_element_1.TextFillter, null,
                react_1.default.createElement(AccessibleForward_1.default, null),
                react_1.default.createElement(left_fillter_element_1.TextFillterNon, null, "Fillter")),
            react_1.default.createElement(left_fillter_element_1.IconOff, null,
                react_1.default.createElement(ArrowBack_1.default, { fontSize: 'small' }))),
        react_1.default.createElement(left_fillter_element_1.DetailContainer, null,
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('status') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(icons_material_1.Ballot, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails },
                    react_1.default.createElement(left_fillter_element_1.TotalButton, null,
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe")))),
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('price') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(AttachFile_1.default, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails1 ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails1 },
                    react_1.default.createElement(left_fillter_element_1.TotalButton, null,
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe")))),
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('chains') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(icons_material_1.Ballot, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails2 ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails2 },
                    react_1.default.createElement(left_fillter_element_1.TotalButton, null,
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe")))),
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('sale-in') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(icons_material_1.Ballot, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails3 ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails3 },
                    react_1.default.createElement(left_fillter_element_1.ListIconCollection, null,
                        react_1.default.createElement(left_fillter_element_1.IconCollection, null,
                            react_1.default.createElement(CurrencyBitcoin_1.default, null),
                            react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                        react_1.default.createElement(left_fillter_element_1.IconCollection, null,
                            react_1.default.createElement(CurrencyBitcoin_1.default, null),
                            react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                        react_1.default.createElement(left_fillter_element_1.IconCollection, null,
                            react_1.default.createElement(CurrencyBitcoin_1.default, null),
                            react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                        react_1.default.createElement(left_fillter_element_1.IconCollection, null,
                            react_1.default.createElement(CurrencyBitcoin_1.default, null),
                            react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details"))))),
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('background') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(icons_material_1.Ballot, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails4 ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails4 },
                    react_1.default.createElement(left_fillter_element_1.CheckBox, null,
                        react_1.default.createElement(left_fillter_element_1.CheckBoxInfor, null,
                            react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { defaultChecked: true }), label: 'Label' }),
                            react_1.default.createElement(left_fillter_element_1.Number, null, "19")),
                        react_1.default.createElement(left_fillter_element_1.CheckBoxInfor, null,
                            react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { defaultChecked: true }), label: 'Hehe' }),
                            react_1.default.createElement(left_fillter_element_1.Number, null, "19")),
                        react_1.default.createElement(left_fillter_element_1.CheckBoxInfor, null,
                            react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { defaultChecked: true }), label: 'Hoho' }),
                            react_1.default.createElement(left_fillter_element_1.Number, null, "19")),
                        react_1.default.createElement(left_fillter_element_1.CheckBoxInfor, null,
                            react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Checkbox_1.default, { defaultChecked: true }), label: 'hihi' }),
                            react_1.default.createElement(left_fillter_element_1.Number, null, "19"))))),
            react_1.default.createElement(left_fillter_element_1.DetailsWrapper, null,
                react_1.default.createElement(left_fillter_element_1.DetailsToggle, { onClick: () => handleToggle('background') },
                    react_1.default.createElement(left_fillter_element_1.DetailsToggleLeft, null,
                        react_1.default.createElement(icons_material_1.Ballot, null),
                        react_1.default.createElement(left_fillter_element_1.DetailsToggleLeftTitle, null, "Details")),
                    isToggleDetails4 ? (react_1.default.createElement(icons_material_1.ExpandMore, { style: { cursor: 'pointer' } })) : (react_1.default.createElement(icons_material_1.ExpandLess, { style: { cursor: 'pointer' } }))),
                react_1.default.createElement(left_fillter_element_1.DetailsInfo, { isToggle: isToggleDetails4 },
                    react_1.default.createElement(left_fillter_element_1.TotalButton, null,
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe"),
                        react_1.default.createElement(left_fillter_element_1.Button, null, "hehehehe")))))));
}
exports["default"] = LeftFillterEle;


/***/ }),

/***/ "./src/www/pages/detail-collections/components/right-fillter/index.jsx":
/*!*****************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/right-fillter/index.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Search_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js"));
const CurrencyBitcoin_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/CurrencyBitcoin */ "./node_modules/@mui/icons-material/CurrencyBitcoin.js"));
const Favorite_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Favorite */ "./node_modules/@mui/icons-material/Favorite.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
const right_fillter_element_1 = __webpack_require__(/*! ./right-fillter-element */ "./src/www/pages/detail-collections/components/right-fillter/right-fillter-element.js");
const mock_data_1 = __webpack_require__(/*! ./mock-data */ "./src/www/pages/detail-collections/components/right-fillter/mock-data.js");
const { Option } = right_fillter_element_1.Select;
function RightFillterEle() {
    function onChange(value) {
        console.log(`selected ${value}`);
    }
    function onSearch(val) {
        console.log('search:', val);
    }
    return (react_1.default.createElement(right_fillter_element_1.RightBox, null,
        react_1.default.createElement(right_fillter_element_1.OptionSelect, null,
            react_1.default.createElement(right_fillter_element_1.SearchWrapper, null,
                react_1.default.createElement(Search_1.default, { style: { color: '#gray' } }),
                react_1.default.createElement(right_fillter_element_1.SearchInput, { placeholder: 'Search items' })),
            react_1.default.createElement(right_fillter_element_1.ComboxOption, null,
                react_1.default.createElement(right_fillter_element_1.Select, { style: { width: 227 }, showSearch: true, placeholder: 'Select a person', optionFilterProp: 'children', onChange: onChange, onSearch: onSearch, filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 },
                    react_1.default.createElement(Option, { value: 'jack' }, "Jack"),
                    react_1.default.createElement(Option, { value: 'lucy' }, "Lucy"),
                    react_1.default.createElement(Option, { value: 'tom' }, "Tom"))),
            react_1.default.createElement(right_fillter_element_1.ComboxOption, null,
                react_1.default.createElement(right_fillter_element_1.Select, { style: { width: 100 }, showSearch: true, placeholder: 'Price:', optionFilterProp: 'children', onChange: onChange, onSearch: onSearch, filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 },
                    react_1.default.createElement(Option, { value: 'jack' }, "Jack"),
                    react_1.default.createElement(Option, { value: 'lucy' }, "Lucy"),
                    react_1.default.createElement(Option, { value: 'tom' }, "Tom")))),
        react_1.default.createElement(right_fillter_element_1.BoxMainImg, null, mock_data_1.data.map((item, index) => (react_1.default.createElement(right_fillter_element_1.BoxImg, { key: index },
            react_1.default.createElement(right_fillter_element_1.ImgAvater, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: '/nft/detail' },
                    react_1.default.createElement(right_fillter_element_1.Image, { src: item.imgUrl, alt: '' }))),
            react_1.default.createElement(right_fillter_element_1.Infor, null,
                react_1.default.createElement(right_fillter_element_1.LeftInfor, null,
                    react_1.default.createElement(right_fillter_element_1.NameCollection, null, "Collection From Actor"),
                    react_1.default.createElement(right_fillter_element_1.NameActor, null, item.nameActor)),
                react_1.default.createElement(right_fillter_element_1.RightInfor, null,
                    react_1.default.createElement(right_fillter_element_1.CollectionID, null, item.collectionID),
                    react_1.default.createElement(right_fillter_element_1.Price, null,
                        react_1.default.createElement(right_fillter_element_1.PriceIcon, null,
                            react_1.default.createElement(CurrencyBitcoin_1.default, null)),
                        react_1.default.createElement(right_fillter_element_1.PriceText, null, item.price)))),
            react_1.default.createElement(right_fillter_element_1.FeedBack, null,
                react_1.default.createElement(right_fillter_element_1.FeedBackIcon, null,
                    react_1.default.createElement(Favorite_1.default, null)),
                react_1.default.createElement(right_fillter_element_1.CountFeedBack, null, item.emotionCount))))))));
}
exports["default"] = RightFillterEle;


/***/ }),

/***/ "./src/www/pages/detail-collections/index.jsx":
/*!****************************************************!*\
  !*** ./src/www/pages/detail-collections/index.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import { Container } from '@mui/material';
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Avatar_1 = __importDefault(__webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js"));
// import Stack from "@mui/material/Stack";
const Button_1 = __importDefault(__webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js"));
const Add_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js"));
const Language_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Language */ "./node_modules/@mui/icons-material/Language.js"));
const Facebook_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Facebook */ "./node_modules/@mui/icons-material/Facebook.js"));
const Instagram_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Instagram */ "./node_modules/@mui/icons-material/Instagram.js"));
const Twitter_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Twitter */ "./node_modules/@mui/icons-material/Twitter.js"));
const CheckCircle_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js"));
const CurrencyBitcoin_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/CurrencyBitcoin */ "./node_modules/@mui/icons-material/CurrencyBitcoin.js"));
const ViewList_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ViewList */ "./node_modules/@mui/icons-material/ViewList.js"));
const fillter_collection_1 = __importDefault(__webpack_require__(/*! ./components/fillter-collection */ "./src/www/pages/detail-collections/components/fillter-collection/index.jsx"));
const list_elements_1 = __webpack_require__(/*! ./list-elements */ "./src/www/pages/detail-collections/list-elements.js");
function ListCollections() {
    return (react_1.default.createElement(list_elements_1.Container, null,
        react_1.default.createElement(list_elements_1.WrapperImage, null,
            react_1.default.createElement(list_elements_1.CaptionImage, { src: 'https://images.hdqwalls.com/wallpapers/bthumb/2020-goku-4k-artwork-9i.jpg' }),
            react_1.default.createElement(list_elements_1.IconImage, null,
                react_1.default.createElement(Avatar_1.default, { alt: 'Remy Sharp', src: 'https://c4.wallpaperflare.com/wallpaper/517/550/386/dragon-ball-dragon-ball-super-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg', sx: { width: 100, height: 100 } }))),
        react_1.default.createElement(list_elements_1.Right, null,
            react_1.default.createElement(list_elements_1.ButtonWatchlist, null,
                react_1.default.createElement(Button_1.default, { variant: 'outlined', startIcon: react_1.default.createElement(Add_1.default, null) }, "Watchlist")),
            react_1.default.createElement(list_elements_1.ListButton, null,
                react_1.default.createElement(list_elements_1.ListButtonItem, { flag: 'right' },
                    react_1.default.createElement(Language_1.default, { sx: { fontSize: 20 } })),
                react_1.default.createElement(list_elements_1.ListButtonItem, null,
                    react_1.default.createElement(Facebook_1.default, { sx: { fontSize: 20 } })),
                react_1.default.createElement(list_elements_1.ListButtonItem, { flag: 'left' },
                    react_1.default.createElement(Instagram_1.default, { sx: { fontSize: 20 } })),
                react_1.default.createElement(list_elements_1.ListButtonItem, { flag: 'left' },
                    react_1.default.createElement(Twitter_1.default, { sx: { fontSize: 20 } })))),
        react_1.default.createElement(list_elements_1.Title, null,
            "\u0110\u1EA1t \u0110\u1EB9p Trai Kh\u00F4ng Nh\u1EA1t Phai",
            react_1.default.createElement(CheckCircle_1.default, null)),
        react_1.default.createElement(list_elements_1.TotalInfor, null,
            react_1.default.createElement(list_elements_1.ListButtonView, { flag: 'right' },
                react_1.default.createElement(list_elements_1.NumerReport, null, "1.5K"),
                react_1.default.createElement(list_elements_1.TittleReport, null, "items")),
            react_1.default.createElement(list_elements_1.ListButtonView, null,
                react_1.default.createElement(list_elements_1.NumerReport, null, "1.8K"),
                react_1.default.createElement(list_elements_1.TittleReport, null, "Owners")),
            react_1.default.createElement(list_elements_1.ListButtonView, { flag: 'left' },
                react_1.default.createElement(list_elements_1.NumerReport, null,
                    react_1.default.createElement(CurrencyBitcoin_1.default, { sx: { fontSize: 18 } }),
                    "1.2K",
                    ' '),
                react_1.default.createElement(list_elements_1.TittleReport, null, "floor price")),
            react_1.default.createElement(list_elements_1.ListButtonView, { flag: 'left' },
                react_1.default.createElement(list_elements_1.NumerReport, null,
                    react_1.default.createElement(CurrencyBitcoin_1.default, { sx: { fontSize: 18 } }),
                    "1.1K"),
                react_1.default.createElement(list_elements_1.TittleReport, null, "volume trade"))),
        react_1.default.createElement(list_elements_1.IntroTitle, null, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),
        react_1.default.createElement(list_elements_1.IconSelect, null,
            react_1.default.createElement(ViewList_1.default, { sx: { fontSize: 40 } }),
            " ",
            react_1.default.createElement(list_elements_1.TittleIcon, null, "Items")),
        react_1.default.createElement(fillter_collection_1.default, null)));
}
exports["default"] = ListCollections;


/***/ }),

/***/ "./src/www/pages/detail-collections/components/fillter-collection/fillter-elements.js":
/*!********************************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/fillter-collection/fillter-elements.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "IconSelect": () => (/* binding */ IconSelect),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "RightBox": () => (/* binding */ RightBox),
/* harmony export */   "Sreachbox": () => (/* binding */ Sreachbox),
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "FillterItems": () => (/* binding */ FillterItems),
/* harmony export */   "TotalItems": () => (/* binding */ TotalItems),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "CollectionID": () => (/* binding */ CollectionID),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "FeedBack": () => (/* binding */ FeedBack),
/* harmony export */   "ImageTitle": () => (/* binding */ ImageTitle),
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const IconSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const RightBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Sreachbox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const FillterItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const TotalItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`

`;
const CollectionID = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;  
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const FeedBack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const ImageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;

const Accordion = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    



`;

/***/ }),

/***/ "./src/www/pages/detail-collections/components/left-fillter/left-fillter-element.js":
/*!******************************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/left-fillter/left-fillter-element.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "LeftBox": () => (/* binding */ LeftBox),
/* harmony export */   "FilltersOn": () => (/* binding */ FilltersOn),
/* harmony export */   "ScrollSelect": () => (/* binding */ ScrollSelect),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "TotalButton": () => (/* binding */ TotalButton),
/* harmony export */   "ScrollCheckBox": () => (/* binding */ ScrollCheckBox),
/* harmony export */   "FilltersOff": () => (/* binding */ FilltersOff),
/* harmony export */   "TextFillter": () => (/* binding */ TextFillter),
/* harmony export */   "TextFillterNon": () => (/* binding */ TextFillterNon),
/* harmony export */   "IconOff": () => (/* binding */ IconOff),
/* harmony export */   "DetailContainer": () => (/* binding */ DetailContainer),
/* harmony export */   "DetailsWrapper": () => (/* binding */ DetailsWrapper),
/* harmony export */   "DetailsToggle": () => (/* binding */ DetailsToggle),
/* harmony export */   "DetailsToggleLeft": () => (/* binding */ DetailsToggleLeft),
/* harmony export */   "DetailsToggleLeftTitle": () => (/* binding */ DetailsToggleLeftTitle),
/* harmony export */   "DetailsInfo": () => (/* binding */ DetailsInfo),
/* harmony export */   "DetailsInfoLeftItem": () => (/* binding */ DetailsInfoLeftItem),
/* harmony export */   "DetailsInfoRightItem": () => (/* binding */ DetailsInfoRightItem),
/* harmony export */   "DetailsInfoLeft": () => (/* binding */ DetailsInfoLeft),
/* harmony export */   "DetailsInfoRight": () => (/* binding */ DetailsInfoRight),
/* harmony export */   "ListIconCollection": () => (/* binding */ ListIconCollection),
/* harmony export */   "IconCollection": () => (/* binding */ IconCollection),
/* harmony export */   "CheckBox": () => (/* binding */ CheckBox),
/* harmony export */   "CheckBoxInfor": () => (/* binding */ CheckBoxInfor),
/* harmony export */   "Number": () => (/* binding */ Number)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
        width: 100%;
  display: flex;
`;

const LeftBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: auto;
  width: 20%;
  border: 1px solid gray;
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
  border-bottom: 1px solid rgb(229, 232, 235);
  border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
  border-top: 1px solid rgb(229, 232, 235);
`;
const FilltersOn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  cursor: pointer;
`;
const ScrollSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border: 1px solid;
  
  border-radius: 1px;
  /* flex: 1; */
  width: auto;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const TotalButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  
`;
const ScrollCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;

const FilltersOff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid gray;
  border-right: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
`;
const TextFillter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextFillterNon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
    margin-top: 4px;
`;
const IconOff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  
`;

const DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  height: 260px;
  overflow-y: auto;
  border: 1px solid gray;
  border-right: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
`

const DetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DetailsToggle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid rgb(229, 232, 235);
    cursor: pointer;
`
const DetailsToggleLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
`
const DetailsToggleLeftTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-left: 10px;
`
const DetailsInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    border-right: 2px solid rgb(229, 232, 235);
    border-bottom: 2px solid rgb(229, 232, 235);
    border-left: 2px solid rgb(229, 232, 235);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px 0px 25px;
    display: ${(props) => (props.isToggle === true ? 'none' : '')};
`
const DetailsInfoLeftItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-bottom: 20px;
`

const DetailsInfoRightItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-bottom: 20px;
`
const DetailsInfoLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    
`
const DetailsInfoRight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
`
const ListIconCollection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap ;
`
const IconCollection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;

`
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
 

`
const CheckBoxInfor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-between;

`
const Number = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 10px;
`


/***/ }),

/***/ "./src/www/pages/detail-collections/components/right-fillter/mock-data.js":
/*!********************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/right-fillter/mock-data.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = [
    {
        id: 1,
        imgUrl:
            'https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png',

        nameItems: 'Lion',
        nameActor: 'TienDat',
        collectionID: 'DB1111',
        price: '$2280.083',
        emotionCount: '14'
    },
    {
        id: 2,
        imgUrl:
            'https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png',

        nameItems: 'Lion',
        nameActor: 'TienDat',
        collectionID: 'DB1112',
        price: '$2280.083',
        emotionCount: '21'
    },
    {
        id: 3,
        imgUrl:
            'https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png',

        nameItems: 'Lion',
        nameActor: 'TienDat',
        collectionID: 'DB1113',
        price: '$2280.083',
        emotionCount: '20'
    },
    {
        id: 4,
        imgUrl:
            'https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png',

        nameItems: 'Lion',
        nameActor: 'TienDat',
        collectionID: 'DB1114',
        price: '$2280.083',
        emotionCount: '19'
    },
    {
        id: 5,
        imgUrl:
            'https://dbgbh.bn-ent.net/assets/img/news/news_thumb_kv.png',

        nameItems: 'Lion',
        nameActor: 'TienDat',
        collectionID: 'DB1115',
        price: '$2280.083',
        emotionCount: '25'
    }

]

/***/ }),

/***/ "./src/www/pages/detail-collections/components/right-fillter/right-fillter-element.js":
/*!********************************************************************************************!*\
  !*** ./src/www/pages/detail-collections/components/right-fillter/right-fillter-element.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightBox": () => (/* binding */ RightBox),
/* harmony export */   "OptionSelect": () => (/* binding */ OptionSelect),
/* harmony export */   "SearchWrapper": () => (/* binding */ SearchWrapper),
/* harmony export */   "SearchInput": () => (/* binding */ SearchInput),
/* harmony export */   "ComboxOption": () => (/* binding */ ComboxOption),
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "FillterItems": () => (/* binding */ FillterItems),
/* harmony export */   "TotalItems": () => (/* binding */ TotalItems),
/* harmony export */   "BoxMainImg": () => (/* binding */ BoxMainImg),
/* harmony export */   "BoxImg": () => (/* binding */ BoxImg),
/* harmony export */   "ImgAvater": () => (/* binding */ ImgAvater),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Infor": () => (/* binding */ Infor),
/* harmony export */   "LeftInfor": () => (/* binding */ LeftInfor),
/* harmony export */   "RightInfor": () => (/* binding */ RightInfor),
/* harmony export */   "NameCollection": () => (/* binding */ NameCollection),
/* harmony export */   "NameActor": () => (/* binding */ NameActor),
/* harmony export */   "CollectionID": () => (/* binding */ CollectionID),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "PriceIcon": () => (/* binding */ PriceIcon),
/* harmony export */   "PriceText": () => (/* binding */ PriceText),
/* harmony export */   "FeedBack": () => (/* binding */ FeedBack),
/* harmony export */   "FeedBackIcon": () => (/* binding */ FeedBackIcon),
/* harmony export */   "CountFeedBack": () => (/* binding */ CountFeedBack)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const RightBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 80%;
    height: auto;
    border: 1px solid;
    border-right: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
`;
const OptionSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
    /* margin-top: 50px; */
    margin-left: 10px;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
    width: 300px;
    border: 3px solid #eaedef;
    margin-top: 20px;
    margin-left: 30px;
    padding: 5px 5px ;
    border-radius: 10px;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
    width: 100%;
    padding-left: 5px;
    outline: none;
`;
const ComboxOption = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 300px;
    margin-top: 25px;
    padding-left: 50px;
    outline: none;
`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const FillterItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const TotalItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const BoxMainImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    cursor: pointer;
`;

const BoxImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 255px;
    display: flex;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 30px;
    flex-direction: column;
    border-right: 2px solid rgb(229, 232, 235);
    border-bottom: 2px solid rgb(229, 232, 235);
    border-left: 2px solid rgb(229, 232, 235);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
const ImgAvater = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    /* box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);  */
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    width: 252px;
    height: 250px;
    border-radius: 15px 15px 0px 0px;
`;
const Infor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: auto;
    display: flex;
    justify-content: space-between;
`;
const LeftInfor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    /* width: 20%; */
    width: 100%;
    align-items: center;
    justify-content: flex-start

`;
const RightInfor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

    align-items: center;
    justify-content: flex-end;
`;
const NameCollection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    /* width: 20%; */
    padding-right: 40px;
`;
const NameActor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const CollectionID = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding-left: 25px;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const PriceIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    
`;
const PriceText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const FeedBack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    justify-items: center;
    border-top: 1px solid rgb(229, 232, 235);
`;
const FeedBackIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const CountFeedBack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;


/***/ }),

/***/ "./src/www/pages/detail-collections/list-elements.js":
/*!***********************************************************!*\
  !*** ./src/www/pages/detail-collections/list-elements.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "WrapperImage": () => (/* binding */ WrapperImage),
/* harmony export */   "CaptionImage": () => (/* binding */ CaptionImage),
/* harmony export */   "IconImage": () => (/* binding */ IconImage),
/* harmony export */   "Right": () => (/* binding */ Right),
/* harmony export */   "ButtonWatchlist": () => (/* binding */ ButtonWatchlist),
/* harmony export */   "ListButton": () => (/* binding */ ListButton),
/* harmony export */   "ListButtonItem": () => (/* binding */ ListButtonItem),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "CheckCircle": () => (/* binding */ CheckCircle),
/* harmony export */   "TotalInfor": () => (/* binding */ TotalInfor),
/* harmony export */   "ListButtonView": () => (/* binding */ ListButtonView),
/* harmony export */   "NumerReport": () => (/* binding */ NumerReport),
/* harmony export */   "TittleReport": () => (/* binding */ TittleReport),
/* harmony export */   "CurrencyBitcoinIcon": () => (/* binding */ CurrencyBitcoinIcon),
/* harmony export */   "IntroTitle": () => (/* binding */ IntroTitle),
/* harmony export */   "IconSelect": () => (/* binding */ IconSelect),
/* harmony export */   "TittleIcon": () => (/* binding */ TittleIcon),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "LeftBox": () => (/* binding */ LeftBox),
/* harmony export */   "Fillters": () => (/* binding */ Fillters),
/* harmony export */   "ScrollSelect": () => (/* binding */ ScrollSelect),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ScrollCheckBox": () => (/* binding */ ScrollCheckBox),
/* harmony export */   "CheckBox": () => (/* binding */ CheckBox),
/* harmony export */   "RightBox": () => (/* binding */ RightBox),
/* harmony export */   "Sreachbox": () => (/* binding */ Sreachbox),
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "FillterItems": () => (/* binding */ FillterItems),
/* harmony export */   "TotalItems": () => (/* binding */ TotalItems),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "CollectionID": () => (/* binding */ CollectionID),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "FeedBack": () => (/* binding */ FeedBack),
/* harmony export */   "ImageTitle": () => (/* binding */ ImageTitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;//
  align-items: center;
`;

const WrapperImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  /* position: relative; */
  /* margin: 0; */
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

const CaptionImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 100%;
  height: 248px;
  
  ;
`;

const IconImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  z-index: 1;
  margin-top: -50px;
`;

const Right = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonWatchlist = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-right: 10px;
`;

const ListButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  /* border-radius: 10px; */
  
`;

const ListButtonItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
    border-top: 1px solid rgb(229, 232, 235);
    padding: 7px 10px;
    &:hover {
        box-shadow: 0px 0px 3px 0px #888888;
    }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  
`;

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  font-weight: bold;
  size: 20px;
  display: flex;
  justify-content: center;
  
`;

const CheckCircle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  
  position: absolute;
  align-self: center;


`
const TotalInfor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const ListButtonView = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  /* border: 1px solid; */
  padding: 10px;
  /* border-radius: 0px 0px 0px 5px; */
  text-align: center;
  padding: 4%;
  width: 200px;
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
    border-top: 1px solid rgb(229, 232, 235);
    padding: 7px 10px;
    &:hover {
        box-shadow: 0px 0px 3px 0px #888888;
    }
`
const NumerReport = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: center;
`
const TittleReport = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  
`

const CurrencyBitcoinIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  
`
const IntroTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  padding-left: 150px;
  padding-right: 150px;
  
`;
const IconSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TittleIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  align-self: center;
`;



const Box = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const LeftBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Fillters = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;
const ScrollSelect = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const ScrollCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`

`;
const RightBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Sreachbox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const FillterItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const TotalItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`

`;
const CollectionID = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const FeedBack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`

`;
const ImageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`;



/***/ })

}]);
//# sourceMappingURL=src_www_pages_detail-collections_index_jsx.index.js.map