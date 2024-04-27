import * as React from 'react';
import classnames from 'classnames';
// @ts-ignore
import { EditableSection, Grid, List, usePrevious } from 'sparkyLib';
import { StoreSearchDrawer } from '../../components/StoreSearchDrawer/StoreSearchDrawer';
import { StoreListingCard  } from '../../components/StoreListingCard/StoreListingCard';

import './SearchStore.scss';

export interface SearchStoreProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Apply success state to the treats points section
   */
  isActive?: boolean;
  /**
   * Logged in state
   */
  loggedIn?: boolean;
  /**
   * Show storeAlert toggle
   */
  showStoreAlert?: boolean;
  /**
   * On click function to be passed down to run on click of the button
   */
  onClick?: () => void;
}

/**
 * Primary example UI to trigger Search Store Drawer show
 */
export const SearchStore = ({
  className,
  loggedIn,
  isActive,
  showStoreAlert,
}: SearchStoreProps) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [isSaved, setIsSaved] = React.useState(false);
  const [storeDrawerOpen, setStoreDrawerOpen] = React.useState(
    showStoreAlert ? showStoreAlert : false
  );
  const [, setIsActiveVar] = React.useState(isActive || false);

  /**
   * Open store drawer
   * 1) Close the filter drawer so that the store drawer stays to the front.
   */
  function openStoreDrawer() {
    setStoreDrawerOpen(true);
    setIsSaved(false);
  }

  /**
   * Close store drawer
   * 1) Reopen the filter drawer so that when the store drawer closes, the filter drawer is open
   */
  function closeStoreDrawer() {
    setIsActiveVar(false);
    setStoreDrawerOpen(false);
    setIsSaved(true);
  }

  // /**
  //  * //TODO: implement persistent state before submit search and close drawer
  //  * Used to toggle the active state of the section
  //  * 1) If onClick function is passed down, run that function when the edit button is clicked
  //  */
  // const toggleSearchStoreState = () => {
  //   if (onClick) {
  //     onClick();
  //   }
  //   setIsActiveVar(!isActiveVar);
  // };

  /**
   * Use effect
   * 1) Set prevIsActive to previous isActive prop
   * 2) If prevIsActive is defined and previous isActive prop is not equal
   * to current isActive prop, toggle state
   */
  const prevIsActive = usePrevious(isActive); /* 1 */

  /**
   * React.UseEffect lifecycle hook
   */
  // React.useEffect(() => {
  //   if (prevIsActive !== undefined || null) {
  //     if (isActive) {
  //       setIsActiveVar(true);
  //     } else {
  //       setIsActiveVar(false);
  //     }
  //   }
  // }, [isActive, prevIsActive]);

  const componentClassName = classnames('c-store-search', className, {});

  return (
    <EditableSection
      className={componentClassName}
      isActive={storeDrawerOpen}
      title="Store"
      buttonText="Change store"
      buttonCloseText="Close"
      onClick={openStoreDrawer}
      ref={ref}
      description={
        (loggedIn || isSaved) && (
          <div className="sparky-u-margin-top-xs">North Mesa</div> //TODO: default display at this level dependent on wrapper recipe
        )
      }
    >
      <Grid
        className="sparky-u-margin-top-sm sparky-u-margin-bottom-md"
        gap="sm"
      >
        {!loggedIn && !isSaved && (
          <StoreSearchDrawer
            showAlert={showStoreAlert} //TODO: validate need at this level vs drawer when searching
            isActive={storeDrawerOpen}
            // onClose={closeStoreDrawer}
          >
            {/* <List>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="Desert Ridge"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="North Scottsdale (Mayo Blvd)"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="North Scottsdale (Frank Lloyd Wright)"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="Scottsdale (90th St and Shea)"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="The Summit at Scottsdale"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="The Summit at Scottsdale"
                ></StoreListingCard>
              </List.Item>
              <List.Item>
                <StoreListingCard
                  rating={3.5}
                  title="Scottsdale (Old Town)"
                ></StoreListingCard>
              </List.Item>
            </List> */}
          </StoreSearchDrawer>
        )}
      </Grid>
    </EditableSection>
  );
};
