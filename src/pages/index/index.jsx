import React, { useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { testFlatArr, testUniqueArr } from '../../test-params-config';
import {
    flatArrWithFlat,
    flatArrWithReduce,
    uniqueArrWithSet,
    uniqueArrWithFilter,
    customFilter,
} from '../../handwriting/index';

const IndexPage = () => {
    useEffect(() => {}, []);
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
