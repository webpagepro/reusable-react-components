// @ts-ignore
import * as React from 'react';
import { Card, Heading, TextPassage } from 'sparkyLib';
import classnames from 'classnames';

import './Camp4UpCardStacked.scss';

export interface Camp4UpCardStackedProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;

    /**
     * Image source
     */
    imgSrc?: string;

    /**
     * Image alt text
     */
    imgAlt?: string;

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
     * Link destination
     */
    href?: string;

    inverted?: boolean;

}
export const Camp4UpCardStacked = ({
    className,
    imgSrc,
    imgAlt,
    title,
    textAlign = 'center',
    bodyCopy,
    href,
    inverted,
    ...other
}: Camp4UpCardStackedProps) => {
    const baseClassName = 'sparky-c-campaign-card-4up__card';
    const componentClassName = classnames(baseClassName, className, {
        'sparky-c-campaign-card-4up__card--inverted': inverted,
    });

    const TagName = href ? 'a' : 'div';
    return (
        <TagName href={href} className='sparky-c-campaign-card-4up__link' {...other}>
            <Card className={componentClassName} >
                <Card.Header className='sparky-c-campaign-card-4up__header'>
                    <img className='lazyload sparky-c-campaign-card-4up__image' src={imgSrc} alt={imgAlt} />
                </Card.Header>
                <Card.Footer className="sparky-c-campaign-card-4up__footer c-footer__container">
                    <Heading tagName="h2" size="body-lg-bold" className="sparky-c-campaign-card-4up__footer-body">
                        {title}
                    </Heading>
                    <TextPassage className="sparky-c-campaign-card-4up__footer-terms">
                        {bodyCopy}
                    </TextPassage>
                </Card.Footer>
            </Card>
        </TagName >
    );
};