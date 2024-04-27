import classnames from 'classnames';
// @ts-ignore
import { Card, Heading, TextPassage, Video, Button } from 'sparkyLib';
// import { Iframe } from '../../components/Iframe';
import './BrandCard2Up.scss';
import GetResponsiveImg from '../../utility/util';
import { ReactNode } from 'react';

export interface BrandCard2UpProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;

    /**
     * Inverted text toggle for text-block
     */
    inverted?: boolean;

    /**
     * Image source
     */
    mediaSrc?: string;

    /**
     * Image alt text
     */
    mediaAlt?: string;

    /**
     * Card title
     */
    title?: string;

    /**
     * Text Alignment
     */
    textAlign?: string;

    /**
     * Card body copy under image
     */
    bodyCopy?: string;

    /**
     * Card terms copy under body copy
     */
    termsCopy?: string;

    /**
     * Link destination
     */
    href?: string;

    /**
    * Change background color of text block below image
    */
    textBlockBgColor?: string;

    /**
    * Change text block to top or bottom
    */
    isTextBottom?: boolean;
    
    /**
    * Include a CTA into header textblock
    */
    hasCTA?: boolean;
    
    /**
    * CTA copy in button
    */
    ctaCopy?: String;

    media?: React.ReactNode;


}

export const BrandCard2Up = ({
    className,
    mediaSrc,
    mediaAlt,
    inverted = false,
    title,
    textAlign = 'center',
    bodyCopy,
    termsCopy,
    hasCTA = false,
    ctaCopy= 'Shop now',
    href,
    textBlockBgColor = 'var(--sparky-color-neutral-50)',
    media,
    isTextBottom,
    ...other

}: BrandCard2UpProps) => {
    const cardContent = classnames("sparky-c-brand-card-2up__header-card", {
        'sparky-c-brand-card-2up__header-card--content-flipped': isTextBottom,
    });
    const textBlock = classnames("sparky-c-brand-card-2up__header-content", {
        'sparky-c-brand-card-2up__header-content--inverted': inverted, //sparky-c-brand-card-2up__body-content
    });
    // const TagName = href ? 'a' : 'div';
    return (
        // <TagName href={href} className='sparky-c-brand-card-2up__link' {...other}>
            <Card className='sparky-c-brand-card-2up__card'>
                <Card.Header className='sparky-c-brand-card-2up__header'>
                    <div className={cardContent}>
                        <div className={textBlock} style={
                            { 'backgroundColor': textBlockBgColor } as React.CSSProperties
                        }>
                            <Heading tagName="h2" size="title-xl" className="sparky-c-brand-card-2up__body-title">
                                {title}
                            </Heading>
                            <TextPassage className="sparky-c-brand-card-2up__footer-body">
                                {bodyCopy}
                            </TextPassage>
                            {hasCTA && <Button variant="primary" text={ctaCopy} href={href} />}
                        </div>
                        {media}
                    </div>
                </Card.Header>
                {/* <Card.Footer className="sparky-c-brand-card-2up__footer c-footer__container">

                </Card.Footer> */}
            </Card>
        // </TagName >
    );
};