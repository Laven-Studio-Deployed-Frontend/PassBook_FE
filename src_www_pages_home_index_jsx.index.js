"use strict";
(self["webpackChunktemplate_assets"] = self["webpackChunktemplate_assets"] || []).push([["src_www_pages_home_index_jsx"],{

/***/ "./src/www/components/nft-item/index.jsx":
/*!***********************************************!*\
  !*** ./src/www/components/nft-item/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const nft_item_elements_1 = __webpack_require__(/*! ./nft-item.elements */ "./src/www/components/nft-item/nft-item.elements.js");
const icons_material_1 = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
function NftItem({ item }) {
    return (react_1.default.createElement(nft_item_elements_1.ProductItem, null,
        react_1.default.createElement(nft_item_elements_1.ProductItemTop, null,
            react_1.default.createElement(nft_item_elements_1.ProductItemImage, { src: item === null || item === void 0 ? void 0 : item.image, alt: '' }),
            react_1.default.createElement(nft_item_elements_1.FilterImage, null,
                react_1.default.createElement(nft_item_elements_1.Mask, null),
                react_1.default.createElement(nft_item_elements_1.ViewProductBtn, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/nft/${Number(item === null || item === void 0 ? void 0 : item.index)}`, style: { textDecoration: 'none', color: '#fecc45' } }, "View NFT")))),
        react_1.default.createElement(nft_item_elements_1.ProductItemBottom, null,
            react_1.default.createElement(nft_item_elements_1.ProductItemBottomTop, null,
                react_1.default.createElement(nft_item_elements_1.NameWrapper, null,
                    react_1.default.createElement(nft_item_elements_1.ProductItemName, null, item === null || item === void 0 ? void 0 : item.name),
                    react_1.default.createElement(nft_item_elements_1.BuyBtn, null, "Buy now")),
                react_1.default.createElement(nft_item_elements_1.ProductItemCategory, null, "Collection 1")),
            react_1.default.createElement(nft_item_elements_1.ProductItemFooter, null,
                react_1.default.createElement(icons_material_1.FavoriteBorder, null),
                react_1.default.createElement(nft_item_elements_1.PriceWrapper, null,
                    react_1.default.createElement(nft_item_elements_1.PriceLogo, { src: "https://cryptologos.cc/logos/internet-computer-icp-logo.png", alt: "" }),
                    react_1.default.createElement(nft_item_elements_1.Price, null, "0.5"))))));
}
exports["default"] = NftItem;


/***/ }),

/***/ "./src/www/pages/home/index.jsx":
/*!**************************************!*\
  !*** ./src/www/pages/home/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const list_nft_1 = __importDefault(__webpack_require__(/*! ../list-nft */ "./src/www/pages/list-nft/index.jsx"));
function Home() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(list_nft_1.default, null)));
}
exports["default"] = Home;


/***/ }),

/***/ "./src/www/pages/list-nft/index.jsx":
/*!******************************************!*\
  !*** ./src/www/pages/list-nft/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const nft_item_1 = __importDefault(__webpack_require__(/*! ../../components/nft-item */ "./src/www/components/nft-item/index.jsx"));
const list_nft_elements_1 = __webpack_require__(/*! ./list-nft.elements */ "./src/www/pages/list-nft/list-nft.elements.js");
const custom_axios_1 = __webpack_require__(/*! ../../utils/custom-axios */ "./src/www/utils/custom-axios.js");
const react_2 = __webpack_require__(/*! @connect2ic/react */ "./node_modules/@connect2ic/react/dist/connect2ic-react.esm.js");
const principal_1 = __webpack_require__(/*! @dfinity/principal */ "./node_modules/@dfinity/principal/lib/esm/index.js");
function ListNft() {
    const { isConnected, disconnect, activeProvider, isIdle, connect, isConnecting, principal } = react_2.useConnect();
    const [listNFt, setListNFt] = react_1.useState([]);
    const [listAllNFt, setListAllNFt] = react_1.useState([]);
    const [superheroes, { loading, error }] = react_2.useCanister('superheroes');
    react_1.useEffect(async () => {
        if (superheroes) {
            getListAll();
            getLIst();
        }
    }, [superheroes]);
    const getListAll = async () => {
        const res = await superheroes.getAllTokens();
        const promise4all = Promise.all(res.map(function (el) {
            var _a;
            return custom_axios_1.customAxios((_a = el.metadata[0]) === null || _a === void 0 ? void 0 : _a.tokenUri);
        }));
        const resu = await promise4all;
        const newlist = res.map((el, index) => {
            return { ...el, ...resu[index] };
        });
        setListAllNFt(newlist);
    };
    const getLIst = async () => {
        const res = await superheroes.getUserTokens(principal_1.Principal.fromText(principal));
        const promise4all = Promise.all(res.map(function (el) {
            var _a;
            return custom_axios_1.customAxios((_a = el.metadata[0]) === null || _a === void 0 ? void 0 : _a.tokenUri);
        }));
        const resu = await promise4all;
        const newlist = res.map((el, index) => {
            return { ...el, ...resu[index] };
        });
        setListNFt(newlist);
    };
    return (react_1.default.createElement(list_nft_elements_1.Container, null,
        react_1.default.createElement(list_nft_elements_1.TopWrapper, null,
            react_1.default.createElement(list_nft_elements_1.Title, null, "Explore")),
        react_1.default.createElement(list_nft_elements_1.ListNftWrapper, null, listAllNFt.map((item, index) => (react_1.default.createElement(nft_item_1.default, { item: item, key: index })))),
        react_1.default.createElement(list_nft_elements_1.TopWrapper, null,
            react_1.default.createElement(list_nft_elements_1.Title, null, "My NFT")),
        react_1.default.createElement(list_nft_elements_1.ListNftWrapper, null, listNFt.map((item, index) => (react_1.default.createElement(nft_item_1.default, { item: item, key: index }))))));
}
exports["default"] = ListNft;


/***/ }),

/***/ "./src/www/components/nft-item/nft-item.elements.js":
/*!**********************************************************!*\
  !*** ./src/www/components/nft-item/nft-item.elements.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItem": () => (/* binding */ ProductItem),
/* harmony export */   "FilterImage": () => (/* binding */ FilterImage),
/* harmony export */   "ProductItemTop": () => (/* binding */ ProductItemTop),
/* harmony export */   "ProductItemImage": () => (/* binding */ ProductItemImage),
/* harmony export */   "Mask": () => (/* binding */ Mask),
/* harmony export */   "ViewProductBtn": () => (/* binding */ ViewProductBtn),
/* harmony export */   "ProductItemBottom": () => (/* binding */ ProductItemBottom),
/* harmony export */   "ProductItemBottomTop": () => (/* binding */ ProductItemBottomTop),
/* harmony export */   "NameWrapper": () => (/* binding */ NameWrapper),
/* harmony export */   "BuyBtn": () => (/* binding */ BuyBtn),
/* harmony export */   "ProductItemName": () => (/* binding */ ProductItemName),
/* harmony export */   "ProductItemCategory": () => (/* binding */ ProductItemCategory),
/* harmony export */   "ProductItemFooter": () => (/* binding */ ProductItemFooter),
/* harmony export */   "PriceWrapper": () => (/* binding */ PriceWrapper),
/* harmony export */   "PriceLogo": () => (/* binding */ PriceLogo),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "PageContainer": () => (/* binding */ PageContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const ProductItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 263px;
    height: 360px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px 0px #888888;
    display: flex;
    flex-direction: column;
`

const FilterImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div` 
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
    display:  flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`

const ProductItemTop = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    flex: 3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 262px;
    &:hover ${FilterImage}{
        opacity: 1;
    }
`

const ProductItemImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    height: 263px;
    width: 100%;
    z-index: 2;
`

const Mask = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
`

const ViewProductBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    z-index: 1;
    position: absolute;
    background-color: transparent;
    border: 2px solid #fecc45;
    color: #fecc45;
    padding: 4px 12px;
`

const ProductItemBottom = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 10px;
    min-height: 100px;
`

const ProductItemBottomTop = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 66%;
`

const NameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BuyBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    color: #18a5ff;
    font-weight: bold;
`


const ProductItemName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
`

const ProductItemCategory = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
`

const ProductItemFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
`

const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
`

const PriceLogo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
    width: 20px;
    margin-right: 7px;
`


const Price = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-size: 16px;
    font-weight: 500;
`

const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

`

/***/ }),

/***/ "./src/www/pages/list-nft/list-nft.elements.js":
/*!*****************************************************!*\
  !*** ./src/www/pages/list-nft/list-nft.elements.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "TopWrapper": () => (/* binding */ TopWrapper),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "ListNftWrapper": () => (/* binding */ ListNftWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
`

const TopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    margin-bottom: 10px;
`

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
`

const ListNftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

/***/ }),

/***/ "./src/www/utils/custom-axios.js":
/*!***************************************!*\
  !*** ./src/www/utils/custom-axios.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAxios": () => (/* binding */ customAxios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


let totalNoInternetRequest = 0;

const customAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create();


// Request interceptor for API calls
customAxios.interceptors.request.use(
    async config => {
        return config; 
    },
    error => {
        Promise.reject(error)
    }
);

customAxios.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    (error) => {
        const response = {
            code: 0,
            data: error?.response?.data,
        };
        
        throw response;
    }
);




/***/ })

}]);
//# sourceMappingURL=src_www_pages_home_index_jsx.index.js.map