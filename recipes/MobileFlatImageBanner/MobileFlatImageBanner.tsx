import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';
import './MobileFlatImageBanner.scss';
// @ts-ignore
import { Heading, TextPassage } from 'sparkyLib';
import { Picture } from '../../components/Picture'

export interface MobileFlatImageBannerProps {
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

    /**
     * Maximum number of characters allowed for subtitle
     */
    maxDescLength?: number;

    /**
     * Property to get width from window in pixels
     */
    windowWidth?: number;
}

interface SourceItem {
    srcSet: string;
    media: string;
}

export type SourceItems = SourceItem[];

export const MobileFlatImageBanner = ({
    className,
    subtitle,
    inverted,
    imgSrc = 'https://via.placeholder.com/200',
    imgAlt = 'placeholder',
    title,
    bgColor = '#F7F7F7',
    items = [],
    maxDescLength = 434,
}: MobileFlatImageBannerProps) => {
    const baseClassName = 'c-treats-banner';
    const componentClassName = classnames(baseClassName, className,
        {
            'c-treats-banner--inverted': inverted,
        });

    const TagName = 'div';
    const mql = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <TagName>
            <div className={componentClassName}
                style={
                    { 'backgroundColor': bgColor } as React.CSSProperties
                }
            >

                <div className="c-treats-banner__container">
                    <Picture
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        items={items}
                    />

                    {(mql) &&
                        <TextPassage
                            className='c-treats-banner__textblock'>
                            {(title && title.length > 0) &&
                                <Heading tagName="h1" className='c-treats-banner-header'>{title}</Heading>
                            }
                            {(subtitle && subtitle.length > 0) &&
                                <Heading tagName="h2" className='c-treats-banner-subtitle'>{subtitle}</Heading>
                            }
                        </TextPassage>
                    }


                </div>
            </div>
        </TagName>
    );
};

