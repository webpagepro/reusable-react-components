import * as React from 'react';
import classnames from 'classnames';
import {
    Drawer,
    Heading,
    ButtonGroup,
    Button,
    TextField,
    TextLink,
    LoadingIndicator,
    Alert,
    TextPassage,
    LayoutLinelengthContainer,
    Grid,
    SparkyLegacyWrapper,
    RadioField,
    KeyValueTable
} from 'sparkyLib';
import './StoreSearchDrawer.scss';
import { StoreListingCard } from '../StoreListingCard/StoreListingCard';
import { useDispatch, useSelector } from 'react-redux';
import { getNearestStores } from '../../services/generator';
import Cookies from 'js-cookie';
import { RootState } from '../../Redux/Reducers';
import { getStoreList, saveStoreDefault } from '../../Redux/Actions/storeListActions';
export interface StoreSearchDrawerProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
     * Active prop passed down to the drawer
     */
    isActive?: boolean;
    /**
     * On close function run on close of the drawer
     */
    // onClose?: () => void;
    /**
     * Children slot where components can be nested
     */
    children: React.ReactNode;
    /**
     * Show alert toggle
     */
    showAlert?: boolean;
}

export const StoreSearchDrawer = ({
    className,
    isActive = false,
    // onClose,
    children,
    showAlert = false,
    ...other
}: StoreSearchDrawerProps) => {
    const [drawerOpen, setDrawerOpen] = React.useState(isActive);
    const drawerButton = React.useRef<HTMLButtonElement>(null);
    const test = React.useRef<HTMLLIElement>(null);

    function openDrawer() {
        setDrawerOpen(true);
    }

    function closeDrawer(evt: React.MouseEvent | React.KeyboardEvent) {
        setTimeout(() => {
            if (drawerButton.current) {
                drawerButton.current.focus();
            }
        }, 1);
        if (evt) {
            evt.preventDefault();
        }
        setDrawerOpen(false);
    }

    const storeCookie = Cookies.get('StoreCookie');
    const [showList, setShowList] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [showError, setShowError] = React.useState(false); //TODO: implement showAlert bool logic on search submit and error handling/toggleList()
    //@ts-ignore
    const [selected, setSelected] = React.useState(window.User.ispuStore.ID);
    //@ts-ignore
    const [textFieldValue, setTextFieldValue] = React.useState("");
    const [viewAllStores, setViewAllStores] = React.useState(false);
    const cookies = Cookies.get();
    const dispatch = useDispatch();
    //@ts-ignore
    const defaultUserPostalCode = window.User.ispuStore.postalCode;
    React.useEffect(() => {
        dispatch(getStoreList(cookies, defaultUserPostalCode, '25', 'mi', 'US'));
    }, []);

    const stores: any = useSelector((state: RootState) => {
        const { storeData } = state;
        return storeData.categoryList;
    });

    const noResult: any = useSelector((state: RootState) => {
        return state.storeData.noResults
    });
    // function handleClickOnStore(event: any) {
    //     event.stopPropagation();
    //     console.log("handleClickOnStore ", event.target);
    //     console.log("handleClickOnStore current  ", event.currentTarget, " + ", event.target == event.currentTarget);
    // }
    function handleClick(event: React.MouseEvent) {
        //event.preventDefault();
        event.stopPropagation();
        console.log("EVENT ", event.target);
        console.log("EVENT ", event.currentTarget, " + ", event.target == event.currentTarget);
        console.log("EVENT 1", (event.currentTarget as HTMLElement).parentElement?.parentElement?.getElementsByClassName("sparky-c-radio sparky-c-radio-field__item-control"));
        (event.currentTarget as HTMLElement).parentElement?.parentElement?.getElementsByClassName("sparky-c-radio sparky-c-radio-field__item-control")[0].getElementsByTagName("input")[0].click();
        // let inputNode = radioRef.current?.getElementsByClassName("sparky-c-radio__input")[0];
        // (inputNode as HTMLElement)?.click();
        // // radioRef.current?.getElementsByClassName("sparky-c-radio__input")[0].setAttribute("checked", true);
        // //@ts-ignore
        // console.log("REF ", radioRef.current?.getElementsByClassName("sparky-c-radio__input")[0]);

    }

    if (stores != undefined) {
        //  console.log('stores 2: ', stores);
    }
    const handleChange = (value: React.SetStateAction<string>) => {
        // console.log("VALUE ", value);
        setSelected(value);
        // console.log("VALUE SELECTED", selected);
    };

    const handleViewAll = (() => {
        setViewAllStores(true);
    })

    let objectStoreList: any = [];
    if (stores != undefined) {
        if ((stores.constructor === Array) && stores.length !== 0) {
            objectStoreList = stores.map((store: any, index: any) => {
                let storeItems = (
                    // <div onClick={handleClickOnStore}>
                    <RadioField.Item
                        //key={index}

                        text=''
                        className='c-sparky-radio-button-align'
                        //value={index.toString()}stores[2].storeId
                        value={(store.storeId).toString()}
                        //__index={index}
                        itemBefore={<div onClick={handleClick}><StoreListingCard
                            //@ts-ignore
                            currentlyShopping={store.isFavorite}
                            isOpenStoreHours={store.isStoreOpen}
                            storeHours={""} //{store.hours["0"].time}
                            title={store.address.name}
                            street={store.address.address1}
                            city={store.address.city}
                            state={store.address.stateCode}
                            postalCode={store.address.postalCode}
                            distance={"NA"} /></div>}

                    />
                    // </div>
                );
                return storeItems
            })
        }
    }

    let storeListDisplay = (
        !noResult && objectStoreList.length <= 0 ?
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <LoadingIndicator />
            </div>
            :
            !noResult ?
                <RadioField label=""
                    defaultValue={objectStoreList[0]}  // TODO:  default value has to be first value in objectStoreList, ie: indexOf();
                    selectedValue={selected}
                    onChange={handleChange}>
                    {objectStoreList}
                </RadioField>
                :
                <div className="c-store-search-drawer__alert-group">
                    <Alert
                        variant="error"
                        iconName="x-circle"
                        className="c-store-search-drawer__alert"
                    >
                        <Alert.Body>
                            <LayoutLinelengthContainer>
                                <Heading tagName="h2" size="body-bold">
                                    No stores nearby
                </Heading>
                            </LayoutLinelengthContainer>
                            <TextPassage>
                                <p>There are no PetSmart stores near the location you have entered.</p>
                            </TextPassage>
                        </Alert.Body>
                    </Alert>
                    <TextLink className='c-store-search-drawer-text-link' href='/stores/us/' target='_blank' >View all stores</TextLink>
                </div>
    );

    function searchStores(zipCode: string) {
        dispatch(getStoreList(cookies, zipCode, '25', 'mi', 'US'));
    }

    function handleSearchInput(event: any) {
        if (event.target.value && event.key === 'Enter') {
            searchStores(event.target.value);
        }
    }

    function handleSearchInputClick(event: any) {
        event.preventDefault();
        searchStores(event.target.nextSibling.getElementsByTagName("input")[0].value);
    }

    const selectStore = () => {
        //@ts-ignore
        var storeSelected = stores.find(store => store.storeId === selected);
        // searchStores(storeSelected.address.postalCode);
        dispatch(saveStoreDefault(cookies, selected, storeSelected.address.postalCode, true));
        setTextFieldValue(storeSelected.address.postalCode);
        console.log("SEARCH STORE SELECTED POSTAL", storeSelected.address.postalCode);

        setDrawerOpen(false);

    }

    const componentClassName = classnames('c-store-search-drawer', className, {});

    const handleOnChangeTextField = (event: any) => {
        setTextFieldValue(event.target.value);
        console.log("handleOnChangeTextField ", event.target.value);
    };

  return (
    <>
      <div onClick={openDrawer} className="drawer-wrapper">
        {/* <Button text={"TEST"} /> */}
        <TextLink>Search Store</TextLink>
      </div>

            <Drawer
                isActive={drawerOpen}
                className={componentClassName}
                onClose={closeDrawer}
                dismissible
                ariaLabelledBy="store-drawer-heading-1"
                {...other}
            >
                <Drawer.Header>
                    <SparkyLegacyWrapper teamName="front-end-web">
                        <Heading id="store-drawer-heading-1" tagName="h2" size="headline">
                            Find a store
            </Heading>
                    </SparkyLegacyWrapper>
                </Drawer.Header>
                <Drawer.Body className="c-store-search-drawer__body">
                    <SparkyLegacyWrapper teamName="front-end-web">
                        <div className="c-store-search-drawer__search">
                            <Button className='c-store-search-drawer__search-button' iconName='search' onClick={handleSearchInputClick} />
                            <TextField
                                className="sparky-u-margin-bottom-md"
                                type="text"
                                value={textFieldValue}
                                floating={false}
                                defaultValue={defaultUserPostalCode}
                                placeholder='Search'
                                label="" onKeyUp={handleSearchInput}
                                onChange={handleOnChangeTextField}
                            //onKeyUp={handleSearchInput}
                            //inputWithin={<Button iconName='search'></Button>}
                            ></TextField>
                            <ButtonGroup>
                                <Button
                                    className="c-store-search-drawer__location"
                                    variant="link"
                                    text="Use current location"
                                    iconPosition="before"
                                    iconName="location-fill"
                                />
                            </ButtonGroup>
                        </div>

                        {/* ERROR/NO STORES NEARBY STATE */}
                        {/* <div className="c-store-search-drawer__alert-group">
                <Alert
                  variant="error"
                  iconName="x-circle"
                  className="c-store-search-drawer__alert"
                >
                  <Alert.Body>
                    <LayoutLinelengthContainer>
                      <Heading tagName="h2" size="body-bold">
                        No stores nearby
                      </Heading>
                    </LayoutLinelengthContainer>
                    <TextPassage>
                      <p>There are no PetSmart stores near the location you have entered.</p>
                    </TextPassage>
                  </Alert.Body>
                </Alert>
                <TextLink>View all stores</TextLink>
          </div> */}

                        {/* NO LIST/EMPTY STATE */}
                        {/* <TextPassage style={{ textAlign: 'center' }}/> */}


                        {/* RADIOFIELD APPROACH */}
                        <div className="c-store-search-drawer__listing">
                            {storeListDisplay}
                        </div>
                    </SparkyLegacyWrapper>
                </Drawer.Body>
                <Drawer.Footer>
                    <SparkyLegacyWrapper teamName="front-end-web">
                        <ButtonGroup align="center">
                            <Button
                                disabled={isLoading || showAlert}
                                variant="primary"
                                fullWidth
                                text="Select store"
                                size="lg"
                                onClick={selectStore}
                            />
                        </ButtonGroup>
                    </SparkyLegacyWrapper>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
