import * as React from 'react';
import './TabsLayout.scss';
// @ts-ignore
import { Tabs } from 'sparkyLib';
import { ReactNode } from 'react';
import parse from "html-react-parser";// helps to parse html string like &trade; which should be <sup>TM</sup>
import { getRenderedContent } from '../../utility/util'

export interface TabsLayoutProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
   * Data for tabs
   */
    contentData?: any;
    // tabItems?: React.ReactNode[];
}

export const TabsLayout = ({
    className,
    contentData,
    // tabItems
}: TabsLayoutProps) => {

    var templateTabList: Array<ReactNode> = [];
    var templateTabSectionList: Array<ReactNode> = [];
    let tabs = contentData.tabs;

    if (tabs !== undefined) {
        if (tabs.length !== 0) {
            tabs.map((tab: any, index: number) => {
                let tabTitle = `${parse(tab.tabTitle)}`;
                let tabSections = tab.sections;
                templateTabSectionList = [];
                tabSections.map((section: any, sectionIndex: number) => {
                    templateTabSectionList.push(getRenderedContent(section.containerName, sectionIndex, section, index));
                });
                templateTabList?.push(
                    <Tabs.Panel title={tabTitle}>
                        {templateTabSectionList}
                    </Tabs.Panel>
                )
            })
        }

    }
    return (
        <Tabs className="tabs-title-styling string-new-line" onChange={() => { }}>
            <React.Fragment key=".0">
                {templateTabList}
            </React.Fragment>
        </Tabs>
    );
};