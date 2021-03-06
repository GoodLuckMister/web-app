import tsc from 'typescript';

import tsConfig from './../tsconfig.json';

module.exports = {
    process(src, path) {
        const isTs = path.endsWith('.ts');
        const isTsx = path.endsWith('.tsx');
        const isTypescriptFile = isTs || isTsx;

        if (isTypescriptFile) {
            return tsc.transpileModule(src, {
                compilerOptions: tsConfig.compilerOptions,
                fileName: path
            }).outputText;
        }

        return src;
    }
};
