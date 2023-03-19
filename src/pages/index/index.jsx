import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { testFlatArr, testUniqueArr } from '../../test-params-config';
import {
    flatArrWithFlat,
    flatArrWithReduce,
    uniqueArrWithSet,
} from '../../handwriting/index';

const IndexPage = () => {
    console.log(testUniqueArr, '->', uniqueArrWithSet(testUniqueArr));
    return (
        <div>
            <Card>
                <CardBody>
                    <Text>Test Chakra Ui</Text>
                </CardBody>
            </Card>
        </div>
    );
};

export default IndexPage;
