import React, { ReactNode } from 'react';
// @ts-ignore
import { Grid, Section } from 'sparkyLib';
import parse from "html-react-parser";// helps to parse html string like &trade; which should be <sup>TM</sup>
import GetResponsiveImg from '../../utility/util'
import { CampMark4UpCard } from './CampMark4UpCard';

export interface CampMark4UpGridProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;

    /**
   * Data for tile carousel
   */
    contentData?: any;
}

/**
 * Campaign MARKETING 4up Grid recipe https://xd.adobe.com/view/4a57665a-bb23-456c-9cc6-f2acaf867be5-1f04/specs/
    * Example data object reference:
 * {
        containerName: "campaignCard4UpStacked",
        variant: "2-4up",
        containerBgColor: "USE HEX",
        shouldCallApi: false,
        showShopAll: false,
        tileSections: [
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                inverted: true,
                preHeaderCopy: 'Up to',
                title: '30% Off',
                displayPattern: 'top',
                // textBlockColor: 'red',
                bodyCopy: "Blue Buffalo Life Protection Formula in sizes 6 lbs - 15lbs",
                termsCopy: "Valid 4/10-4/16, terms apply",
            },
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                // preHeaderCopy: 'preHeader text',
                inverted: true,
                title: 'Sale 4 / $9',
                // displayPattern: 'top',
                // textBlockBgColor: 'purple',
                bodyCopy: "ExquisiCat Naturals Multi-Cat Paper Pellet Cat Litter",
                termsCopy: "Valid 4/10-4/16, terms apply",
            },
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'img alt',
                imgContent: imagelink("5266808"),
                inverted: true,
                preHeaderCopy: 'Dog grooming',
                title: '25% off',
                displayPattern: 'bottom',
                hasTextBlock: false,
                // textBlockBgColor: 'blue',
                bodyCopy: "Treat your pet to the finest spa day our salon has to offer",
                termsCopy: "Valid 4/10-4/16, terms apply",
            },
            {
                href: '/sale/extra-10-off-50-same-day-delivery/litter/cat/?origin=home&desc=spot1&type=hpstory#tabs-1',
                imgAlt: 'Cat Litter',
                imgContent: imagelink("5266808"),
                inverted: true,
                hasTextBlock: false,
                // textBlockBgColor: 'blue',
                title: 'Buy 2, get 1',
                displayPattern: 'top',
                bodyCopy: "Freshpet® Vital™ Grain Free Complete Meals Small Breed",
                termsCopy: "Valid 4/10-4/16, terms apply",
            },
        ],
    },
 */

export const CampMark4UpGrid = ({
    className,
    contentData
}: CampMark4UpGridProps) => {

    var templateObjectList: Array<ReactNode> = [];

    if (contentData.tileSections !== undefined) {
        if (contentData.tileSections.length !== 0) {
            // TODO remove any in product?
            contentData.tileSections.map((product: any, index: number) => {
                let tileTitle = `${parse(product.title)}`; // parsing title to get right type
                templateObjectList.push(
                    <Grid.Item key={index}>
                        <CampMark4UpCard
                            className={className}
                            href={product.href}
                            imgAlt={product.imgAlt}
                            imgSrc={GetResponsiveImg(product)}
                            textBlockBgColor={product.textBlockBgColor}
                            preHeaderCopy={product.preHeaderCopy}
                            title={tileTitle}
                            displayPattern={product.displayPattern}
                            termsCopy={product.termsCopy}
                            bodyCopy={product.bodyCopy}
                        />
                    </Grid.Item>
                )
            })
        }

    }
    return (
        <Section>
            <Grid variant={contentData.variant} className='sparky-c-campaign-marketing-card-4up-grid' style={
                { 'backgroundColor': contentData.containerBgColor } as React.CSSProperties
            }>
                {templateObjectList}
            </Grid>
        </Section>
    );
}