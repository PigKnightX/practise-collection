import React from 'react';
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
    console.log(testUniqueArr, '->', uniqueArrWithFilter(testUniqueArr));

    const sourceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sourceArr.customFilter = customFilter;
    const result = sourceArr.customFilter((item) => {
        return item > 5;
    });
    console.log(result, 'filter result');
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
