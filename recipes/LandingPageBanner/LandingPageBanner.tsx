import * as React from 'react';
import classnames from 'classnames';
import './LandingPageBanner.scss';
// @ts-ignore
import { Heading, TextPassage } from 'sparkyLib';
import { Picture } from '../../components/Picture'

export interface LandingPageBannerProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
   * Title heading text string
   */
    title?: string;
    /**
     * Hero banner subtitle
     */
    subtitle?: string;
    /**
     * Centered-text variant check - Default text alignment = centered from Sparky Text Passage
     */
    textCentered?: boolean;
    /**
     * Alt text for hero banner image
     */
    imgAlt?: string;
    /**
     * Path to image file
     */
    imgSrc?: string;
    /**
     * Color theme for the component. "inverted" theme is for use on dark backgrounds
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
}

interface SourceItem {
    srcSet: string;
    media: string;
}

export type SourceItems = SourceItem[];

export const LandingPageBanner = ({
    className,
    subtitle,
    textCentered = undefined,
    inverted,
    imgSrc = 'https://via.placeholder.com/200',
    imgAlt = 'placeholder',
    title,
    bgColor = '#F7F7F7',
    items = [],
}: LandingPageBannerProps) => {
    const baseClassName = 'c-landing-banner';
    const componentClassName = classnames(baseClassName, className,
        {
            'c-landing-banner--inverted': inverted,
        });
    const textPassageClassName = classnames('c-landing-banner__textblock', className,
        {
            'sparky-c-text-passage--align-left': !textCentered,  // textCentered check to left align or Sparky TextPassage center default
        });

    const TagName = 'div';

    return (
        <TagName>
            <div className={componentClassName}
                style={
                    { 'backgroundColor': bgColor } as React.CSSProperties
                }
            >
                <div className="c-landing-banner__container">
                    <Picture
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        items={items}
                    />
                    <TextPassage
                        className={textPassageClassName}>
                        {(title && title.length > 0) &&
                            <Heading tagName="h1" className='c-landing-banner-header'>{title}</Heading>
                        }
                        {(subtitle && subtitle.length > 0) &&
                            <Heading tagName="h2" className='c-landing-banner-subtitle'>{subtitle}</Heading>
                        }
                    </TextPassage>
                </div>
            </div>
        </TagName>
    );
};