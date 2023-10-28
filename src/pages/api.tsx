import Layout from "@theme/Layout";
import { RedocStandalone, RedocRawOptions } from "redoc";

import openapi from '/openapi.yaml';

const options: RedocRawOptions = {
    disableSearch: true,
    expandResponses: '200',
    hideDownloadButton: true,
    hideSchemaTitles: true,
    sortEnumValuesAlphabetically: true,
    sortOperationsAlphabetically: true,
    sortTagsAlphabetically: true,
    theme: {
        colors: {
            primary: { main: '#CC0000' },
        },
        typography: {
            fontFamily: '"Hapna", "Times New Roman", Times, serif',
            fontSize: '18px',
            headings: {
                fontFamily: '"Hapna", "Times New Roman", Times, serif',
                fontWeight: 'normal',
            },
        },
    },
};

export default function Api(): React.JSX.Element {
    return (
        <Layout title="API">
            <RedocStandalone spec={openapi} options={options} />
        </Layout>
    );
}
