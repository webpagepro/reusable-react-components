import classnames from 'classnames';
// @ts-ignore
import { Card, Heading, TextPassage } from 'sparkyLib';
import './CampMark4UpCard.scss';

export interface CampMark4UpCardProps {
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
    imgSrc?: string;

    /**
     * Image alt text
     */
    imgAlt?: string;

    /**
     * Card preHeader copy above or below image
     */
    preHeaderCopy?: string;

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
        * display preheader text above or below text block title
        */
    displayPattern?: 'top' | 'bottom';


}

export const CampMark4UpCard = ({
    className,
    imgSrc,
    imgAlt,
    inverted = true,
    preHeaderCopy,
    title,
    textAlign = 'center',
    bodyCopy,
    termsCopy,
    href,
    textBlockBgColor = 'var(--sparky-color-brand-red-700)',
    displayPattern,
    ...other
}: CampMark4UpCardProps) => {
    const textBlock = classnames("sparky-c-campaign-marketing-card-4up__header-content", {
        'sparky-c-campaign-marketing-card-4up__header-content--inverted': inverted,
        'c-preheader-bottom': displayPattern === 'bottom', //sparky-c-campaign-marketing-card-4up__body-content 
    });
    const TagName = href ? 'a' : 'div';
    return (
        <TagName href={href} className='sparky-c-campaign-marketing-card-4up__link' {...other}>
            <Card className='sparky-c-campaign-marketing-card-4up__card'>
                <Card.Header className='sparky-c-campaign-marketing-card-4up__header'>
                    <img className='lazyload sparky-c-campaign-marketing-card-4up__image' src={imgSrc} alt={imgAlt} />
                    <div className={textBlock} style={
                        { 'backgroundColor': textBlockBgColor } as React.CSSProperties
                    }>
                        {displayPattern &&
                            <Heading tagName="h2" size="body-lg-bold" className="c-marketing-4up__description">
                                {preHeaderCopy}
                            </Heading>
                        }
                        <Heading tagName="h2" size="title-lg" className="sparky-c-campaign-marketing-card-4up__body-title">
                            {title}
                        </Heading>
                    </div>
                </Card.Header>
                <Card.Footer className="sparky-c-campaign-marketing-card-4up__footer c-footer__container">
                    <TextPassage size="lg" className="sparky-c-campaign-marketing-card-4up__footer-body">
                        {bodyCopy}
                    </TextPassage>
                    <TextPassage size="sm" className="sparky-c-campaign-marketing-card-4up__footer-terms">
                        {termsCopy}
                    </TextPassage>
                </Card.Footer>
            </Card>
        </TagName >
    );
};