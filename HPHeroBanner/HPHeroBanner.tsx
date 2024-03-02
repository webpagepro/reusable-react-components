import * as React from 'react';
import classnames from 'classnames';
import './HPHeroBanner.scss';
// @ts-ignore
import { Heading, TextPassage, Button, Section } from 'sparkyLib';
import { Picture } from '../Picture'
import { useMediaQuery } from 'react-responsive';

export interface HPHeroBannerProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
   * Title heading text string
   */
    title?: string;
    /**
     * Hero banner description
     */
    description?: string;
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
     * Maximum number of characters allowed for description
     */
    maxDescLength?: number;

    /**
   * Toggles the wrapper element div/a and if true will render the button.
   */
    cta?: boolean;

    ctaText?: string;

    tnc?: string;

    href?: string;
}

interface SourceItem {
    srcSet: string;
    media: string;
}

export type SourceItems = SourceItem[];

export const HPHeroBanner = ({
    className,
    description,
    inverted,
    imgSrc = 'https://via.placeholder.com/1500x640',
    imgAlt = 'placeholder',
    title,
    bgColor = '#F7F7F7',
    items = [],
    maxDescLength = 100,
    cta,
    ctaText,
    tnc,
    href
}: HPHeroBannerProps) => {
    const baseClassName = 'c-hp-hero-banner string-new-line';
    const componentClassName = classnames(baseClassName, className, {
        'c-hp-hero-banner--inverted': inverted,
    });
    const baseButtonClassName = 'sparky-c-button sparky-c-button--primary';
    const componentButtonClassName = classnames(baseButtonClassName, className, {
        'sparky-c-button--inverted': inverted,
    });
    const truncatedText = (aText: string): string => {
        if (aText.length > maxDescLength) {
            const range = Math.floor((maxDescLength - '...'.length) / 2)
            return aText.substr(0, range) + '...' + aText.substr(aText.length - range, aText.length);
        }
        return aText;
    }
    const TagName = cta ? 'a' : 'div';
    const mql = useMediaQuery({ query: '(min-width: 992px)' });
    const mqlTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
    let desktopView = mql;
    let tabletView = mqlTablet;
    const titleSize = desktopView ? "display" : tabletView ? "title-lg" : "display";
    return (
        <Section>
        <TagName href={href}>
            <div className={componentClassName}
                style={
                    { 'backgroundColor': bgColor } as React.CSSProperties
                }
            >

                <div className="c-hp-hero-banner__container">
                    <Picture
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        items={items}
                    />
                    {((title && title.length > 0) || (description && description.length > 0)) &&
                        <TextPassage
                            className='c-hp-hero-banner__textblock'
                            align='center'>
                            {(title && title.length > 0) &&
                                <Heading tagName="h1" size={titleSize} className="titleSpace">{title}</Heading>
                            }
                            {(description && description.length > 0) &&
                                <Heading
                                    tagName="h1" className="descSpace">{truncatedText(description)}</Heading>
                            }
                            {(tnc && tnc.length > 0) &&
                                <Heading
                                    tagName="h1" className="tncSpace">{truncatedText(tnc)}</Heading>
                            }
                            {cta && (
                                <div className="sparky-hp-hero-button">
                                    <Button
                                        inverted={inverted}
                                        text={ctaText}
                                        variant="primary"
                                    />
                                </div>
                            )}
                        </TextPassage>
                    }


                </div>
            </div>
            </TagName>
        </Section>
    );
};