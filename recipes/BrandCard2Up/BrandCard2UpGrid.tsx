
import React, { ReactNode } from 'react';
// @ts-ignore
import { Grid, Section, Video, Button } from 'sparkyLib';
import { Iframe } from '../../components/Iframe';
import parse from "html-react-parser";// helps to parse html string like &trade; which should be <sup>TM</sup>
import GetResponsiveImg from '../../utility/util'
import { BrandCard2Up } from './BrandCard2Up';

export interface BrandCard2UpGridProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;

    /**
   * Data for tile carousel
   */
    contentData?: any;
    mediaType?: 'video' | 'youtubeVideo' | 'image';
    mediaAlt?: string;
    mediaSrc?: string;
    isTextBottom?: boolean;
    hasCTA?: boolean;

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
                mediaAlt: 'media alt',
                mediaContent: imagelink("5266808"),
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
                mediaAlt: 'media alt',
                mediaContent: imagelink("5266808"),
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
                mediaAlt: 'media alt',
                mediaContent: imagelink("5266808"),
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
                mediaAlt: 'Cat Litter',
                mediaContent: imagelink("5266808"),
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

export const BrandCard2UpGrid = ({
    className,
    contentData,
    // mediaAlt,
    // mediaSrc,
    mediaType,
    isTextBottom ,
}: BrandCard2UpGridProps) => {
    // <Iframe src={mediaSrc} videoAlt={mediaAlt} /> : mediaType === "video" ? <Video videoSrc={mediaSrc} /> : <img className="imgHeight" src=
    var templateObjectList: Array<ReactNode> = [];

    if (contentData.tileSections !== undefined) {
        if (contentData.tileSections.length !== 0) {
            // TODO remove any in product?
            contentData.tileSections.map((product: any, index: number) => {
                let tileTitle = `${parse(product.title)}`; // parsing title to get right type
                // TODO: pass product.mediaType down into card item
                var mediaCategory = product.mediaType === "youtubeVideo" ?
                <div className='sparky-c-brand-card-2up__video'><Iframe className="lazyload sparky-c-brand-card-2up__image" src={product.mediaContent} videoAlt={product.mediaAlt} /></div> : product.mediaType  === "video" ? <Video videoSrc={product.mediaContent} /> : <img className="lazyload sparky-c-brand-card-2up__image" src={product.mediaContent} alt={product.mediaAlt} />;
                templateObjectList.push(
                    <Grid.Item key={index}>
                        <BrandCard2Up
                            className={className}
                            inverted={product.inverted}
                            hasCTA={product.hasCTA}
                            ctaCopy={product.ctaCopy}
                            href={product.href}
                            mediaAlt={product.mediaAlt}
                            textBlockBgColor={product.textBlockBgColor}
                            title={tileTitle}
                            bodyCopy={product.bodyCopy}
                            media={mediaCategory}
                            isTextBottom={product.isTextBottom}
                        />
                    </Grid.Item>
                )
            })
        }

    }
    return (
        <Section>
            <Grid variant={contentData.variant} className='sparky-c-brand-card-2up-grid' style={
                { 'backgroundColor': contentData.containerBgColor } as React.CSSProperties
            }>
                {templateObjectList}
            </Grid>
        </Section>
    );
}