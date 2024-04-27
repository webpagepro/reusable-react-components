import React, { ReactNode } from 'react';
// @ts-ignore
import { Grid, Section } from 'sparkyLib';
import parse from "html-react-parser";// helps to parse html string like &trade; which should be <sup>TM</sup>
import GetResponsiveImg from '../../utility/util'
import { Camp4UpCardStacked } from './Camp4UpCardStacked';

export interface Camp4UpGridStackedProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;

    /**
   * Data for tile carousel
   */
    contentData?: any;

    inverted?: boolean
}

/**
    * Campaign 4up Grid - Stacked recipe https://xd.adobe.com/view/4a57665a-bb23-456c-9cc6-f2acaf867be5-1f04/specs/
    * Example data object reference:
    * {
        containerName: "campaignCard4UpStacked",
        variant: "2-4up",
        containerBgColor: "USE HEX",
        shouldCallApi: false,
        showShopAll: false,
        isInverted: false,
        tileSections: [
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                title: 'Give your dog comfort',
                bodyCopy: "Give your dog comfort",
            },
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                title: 'Sensitive to your pet’s health',
                bodyCopy: "Give your dog the best they deserve.",
            }, {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                title: 'Purina Pro Plan Dog Food',
                bodyCopy: "All natural based products, take 40% off",
            }, {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                title: 'Natural dog shampoos',
                bodyCopy: "View select brands with this offer.",
            },
        ],
    },
*/

export const Camp4UpGridStacked = ({
    className,
    contentData,
    inverted
}: Camp4UpGridStackedProps) => {
    var templateObjectList: Array<ReactNode> = [];
    if (contentData.tileSections !== undefined) {
        if (contentData.tileSections.length !== 0) {
            contentData.tileSections.map((product: any, index: number) => {
                let tileTitle = `${parse(product.title)}`; // parsing title to get right type
                templateObjectList.push(
                    <Grid.Item key={index}>
                        <Camp4UpCardStacked
                            className={className}   //todo: validate usecase
                            href={product.href}
                            imgAlt={product.imgAlt}
                            imgSrc={GetResponsiveImg(product)}
                            title={tileTitle}
                            bodyCopy={product.bodyCopy}
                            inverted={inverted}
                        />
                    </Grid.Item>
                )
            })
        }

    }
    return (
            <Grid variant={contentData.variant} className='sparky-c-campaign-card-4up-grid' style={
                { 'backgroundColor': contentData.containerBgColor } as React.CSSProperties
            }>
                {templateObjectList}
            </Grid>
    );
}