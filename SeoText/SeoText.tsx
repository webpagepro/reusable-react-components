import React, { useState } from 'react';
import './SeoText.scss';
// import 'sparkyLib/dist/head.css';
// @ts-ignore
import { Section, Button, SparkyTextWrapper, SparkyLegacyWrapper } from 'sparkyLib';
import parse from "html-react-parser";// helps to parse html string like &trade; which should be <sup>TM</sup>

export interface SeoTextProps {
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
   * Data for tile carousel
   */
    contentData?: any;
}

export const SeoText = ({
    className,
    contentData
}: SeoTextProps) => {
    const [clamped, setClamped] = useState(true);
    const handleClick = () => {
        setClamped(!clamped); /* 1 */
    };

    // const seoTextData = (textData: string) => {
    //     return { textData };
    // }

    // let textData = {
    //     toggleText: `Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. Sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolor. `,
    // }

    const buttonProps = (buttonText: string) => {
        return { buttonText };
    }

    let buttonText = { // TODO should this be moved out?
        buttonVariant: 'link',
        showMore: contentData.showMoreText ?? "Show more",
        showLess: contentData.showLessText ?? "Show less",
    }

    const classVar = (className: string) => {
        return { className };
    }

    return (
        <SparkyLegacyWrapper>

            <Section title={contentData.title}>
                <div className="mobile-size-hrvtXc6alOpHtPvDkU">

                    <SparkyTextWrapper truncateOn={clamped ? 4 : undefined}>{parse(contentData.subTitle)}  </SparkyTextWrapper>
                </div>
                <div className="desktop-size-hrvtXc6alOpHtPvDkU">
                    <SparkyTextWrapper truncateOn={clamped ? 1 : undefined}>{parse(contentData.subTitle)}  </SparkyTextWrapper>
                </div>

                <Button
                    onClick={handleClick}
                    className='sparky-c-button--link'
                    text={clamped ?
                        buttonText.showMore : buttonText.showLess}
                >
                </Button>
            </Section>
        </SparkyLegacyWrapper>
    )
}

