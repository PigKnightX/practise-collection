// 测试 数组打平
const testFlatArr = [
    1,
    [
        'simile',
        [
            {
                name: 'xzl',
                getValue: function () {
                    console.log(this.name);
                },
            },
            [4, 5],
        ],
    ],
    6,
];

// 测试 数组去重
const testUniqueArr = [
    1,
    1,
    '1',
    17,
    true,
    true,
    false,
    false,
    'true',
    'a',
    {},
    {},
];

export { testFlatArr, testUniqueArr };
