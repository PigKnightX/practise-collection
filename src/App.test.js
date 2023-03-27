import { render, screen } from '@testing-library/react';
import App from './App';

test('excution func', () => {
    const nameReader = {
        name: 'source',
        getName: function () {
            return this.name;
        },
        setName: function (name) {
            this.name = name;
        },
    };

    const plainObj = {
        name: 'plain',
    };

    const plainObjNameReader = nameReader.getName.bind(plainObj);

    const result = plainObjNameReader();

    function NameReaderGenerater(name) {
        this.name = name;
        this.setName = function (name) {
            this.name = name;
        };
        this.getName = function () {
            return this.name;
        };
    }

    const nameReader1 = new NameReaderGenerater('nameReader1');
    nameReader1.setName('reder1');

    let foo = {
        name: 'foo',
    };

    // 作为构造函数时，bind 传入的this被扔掉，此时的this是new出来的新对象。
    const GeneratorCopy = NameReaderGenerater.bind(foo, 'GeneratorCopy');
    const generatorCopyObj = new GeneratorCopy();

    // TODO: JS 继承
    // TODO: 实现bind

    expect(result).toBe('plain');
    expect(nameReader1.name).toBe('reder1');
    expect(generatorCopyObj.name).toBe('GeneratorCopy');
});
