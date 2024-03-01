import * as React from 'react';
import classnames from 'classnames';
import './CampaignHeroBanner.scss';
// @ts-ignore
import { Heading, TextPassage, Button, Section } from 'sparkyLib';
import { Picture } from '../Picture'

export interface CampaignHeroBannerProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
* Headline text string
*/
    headline?: string;
    /**
* Body text string
*/
    body?: string;
    /**
   * Title heading text string
   */
    title?: string;
    /**
  * Title heading text string
  */
    titleXL?: string;
    /**
     * Hero banner description
     */
    description?: string;
    /**
?: string;
/**
 * Alt text for left hero banner image
 */
    imgAlt?: string;
    /**
 * Alt text for right hero banner image
 */
    imgAlt2?: string;
    /**
    * Path to first image file
    */
    caption?: string;
    /* Path to first image file
    */
    /**
     * Path to left image file
     */
    imgSrc?: string;
    /* Path to 2nd image file
    */
    imgSrc2?: string;
    /* Path to right image file
    */
    inverted?: boolean;
    /**
     * Backgorund color for banner
     */
    bgColor?: string;
    /**
     * The array of items to be passed into the source tag. The array must take on the specified shape
     */
    items?: SourceItems;
    /**
       * The array of items to be passed into the source tag. The array must take on the specified shape
       */
    items2?: SourceItems;
    /**
     * Maximum number of characters allowed for description
     */
    maxDescLength?: number;

    /**
   * Toggles the wrapper element div/a and if true will render the button.
   */
    cta?: boolean;

    ctaText?: string;

    href?: string;

    isOffer?: boolean;

}

interface SourceItem {
    srcSet: string;
    media: string;
}

export type SourceItems = SourceItem[];
export const CampaignHeroBanner = ({
    className,
    titleXL,
    headline,
    description,
    caption,
    inverted,
    imgSrc = "https://via.placeholder.com/180X180",
    imgSrc2 = "https://via.placeholder.com/392X392",
    imgAlt = "left alt",
    imgAlt2 = "right alt",
    title,
    bgColor = '',
    items = [],
    items2 = [],
    maxDescLength = 100,
    cta,
    ctaText,
    href,
    isOffer = false,
}: CampaignHeroBannerProps) => {
    const baseClassName = 'campaign-hero-banner';
    const componentClassName = classnames(baseClassName, className, {
        'campaign-hero-banner--inverted': inverted,
    });

    const baseButtonCaptionToggle = 'campaign-button-caption-toggle';
    const buttonCaptionToggle = classnames(baseButtonCaptionToggle, className, {
        'campaign-button-caption-toggle--isOffer': isOffer === true
    });

    const baseButtonClassName = 'sparky-c-button sparky-c-button--primary';
    const componentButtonClassName = classnames(baseButtonClassName, className, {
        'sparky-c-button--inverted': inverted,
    });

    const TagName = cta ? 'a' : 'div';

    return (

        <TagName href={href} className="textDecorationThickness">
            <div className={componentClassName}
            >
                <div className="campaign-hero-banner__container" style={
                    { 'backgroundColor': bgColor } as React.CSSProperties
                }>
                    <div className="campaign-hero-banner">
                        <Picture
                            imgAlt={imgAlt}
                            imgSrc={imgSrc}
                            items={items}
                        />
                    </div>

                    <div className="campaign-hero-banner">
                        {!isOffer
                            ?
                            <TextPassage
                                inverted={inverted}
                                className='campaign-hero-banner__textblock'
                                align='center'>
                                <Heading tagName="h2" className="campaign-hero-banner_textblock__headline">{headline}
                                </Heading>

                                <>
                                    <Heading tagName="h1" className="campaign-hero-banner_textblock__largeTitle">{titleXL}</Heading>

                                    <Heading tagName="h3" className="campaign-hero-banner_textblock__title">{title}</Heading>
                                </>

                                <Heading
                                    tagName="h4" className="campaign-hero-banner_textblock__descripton">{description}</Heading>

                                <div className={buttonCaptionToggle}>

                                    <Heading
                                        tagName="h6" className="campaign-hero-banner_textblock__caption">{caption}</Heading>

                                    <div className="sparky-hp-hero-button">
                                        <Button
                                            inverted={inverted}
                                            text={ctaText}
                                            variant="primary"
                                        />
                                    </div>
                                </div>
                            </TextPassage>
                            :
                            <TextPassage
                                inverted={inverted}
                                className='campaign-hero-banner__textblock_padded'
                                align='center'>
                                <Heading tagName="h2" className="campaign-hero-banner_textblock__headline">{headline}
                                </Heading>


                                <div className="oneline">
                                    <Heading tagName="h1" className="campaign-hero-banner_textblock__dollars">{titleXL}</Heading>

                                    <Heading tagName="h3" className="campaign-hero-banner_textblock__offer">{title}</Heading>
                                </div>


                                <Heading
                                    tagName="h4" className="campaign-hero-banner_textblock__descripton">{description}</Heading>

                                <div className={buttonCaptionToggle}>

                                    <Heading
                                        tagName="h6" className="campaign-hero-banner_textblock__caption">{caption}</Heading>

                                    <div className="sparky-hp-hero-button">
                                        <Button
                                            inverted={inverted}
                                            text={ctaText}
                                            variant="primary"
                                        />
                                    </div>
                                </div>
                            </TextPassage>
                        }
                    </div>

                    <div className="campaign-hero-banner">
                        <Picture
                            imgAlt={imgAlt2}
                            imgSrc={imgSrc2}
                            items={items2}
                        />
                    </div>
                </div>
            </div>
        </TagName>
    );
};