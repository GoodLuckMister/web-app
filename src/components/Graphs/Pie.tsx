import React from 'react';
import { PieArcSeries, PieChart, PieChartProps } from 'reaviz';

interface IPie extends PieChartProps {
    total?: number;
    entries: { key: string; data: number; color: string }[];
}

export const Pie: React.FC<IPie> = ({ width, height, entries }) => {
    const PieArcSeriesWithPadding = React.useCallback(
        (props: Partial<React.ComponentProps<typeof PieArcSeries>>) => {
            const modifiedData = props.data?.map?.((arc: any) => ({ ...arc, padAngle: 0.03 }));
            return <PieArcSeries {...props} data={modifiedData} />;
        },
        []
    );

    const series = (
        <PieArcSeriesWithPadding
            doughnut={true}
            colorScheme={({ key }) => entries.find((v) => v.key === key).color}
            arcWidth={0.1}
        />
    );
    return <PieChart width={width} height={height} data={entries} series={series} />;
};
