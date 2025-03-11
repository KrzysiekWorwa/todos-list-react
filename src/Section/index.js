import { SectionBody, SectionHeader, Title, Body } from "./styled";


const Section = ({ title, body, extraHeaderContent }) => (

    <SectionBody>
        <SectionHeader>
            <Title>{title}
            </Title>
            {extraHeaderContent}
        </SectionHeader>
        <Body>
            {body}
        </Body>
    </SectionBody>

);

export default Section;