import React from 'react';

export class SupportFooter extends React.Component {
    render() {
        return (
            <div className="light-blue-background">
                <div className="padding-sides padding-top-2rem padding-bottom-1rem">
                    <h4><b>Support</b></h4>
                    <p className="font-size-12">This project represents a collaboration between the UW School of Medicine Service Learning Program, AHEC for Western Washington, UWSOM Center for Health Equity, Diversity, and Inclusion, Eastern AHEC Center, and all of our comminity partners throughout the region.</p>
                    <h4><b>Funding Sources</b></h4>
                    <p className="font-size-12">
                        UW School of Medicine Service Learning
                        <br />
                        <br />
                        UW Medicine Office of Healthcare Equity
                        <br />
                        <br />
                        Washington State Department of Health
                        <br />
                        <br />
                       Area Health Education Centers are funded by the Health Resources and Services Administration (HRSA) of the U.S. Department of Health and Human Services (HHS) under grant number U77HP03022, for the WWAMI Area Health Education (WWAMI AHEC) Program Office and its five regional Centers in the total amount of $836,630 for the 2020-2021 fiscal year (with a 1:1 total match of $836,630 from non-federally funded governmental sources). This information or content and conclusions are those of the author and should not be construed as the official position or policy of, nor should any endorsements be inferred by HRSA, HHS or the U.S. Government.
                    </p>
                </div>
            </div>
        )
    }
}