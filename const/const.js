module.exports.param = {
    TimePeriod: {
        Start: null,
        End: null
    },
    Filter: {
        Not: {
            Dimensions: {
                Key: "RECORD_TYPE",
                Values: ["Credit", "Refund", "Tax", "Upfront"]
            }
        }
    },
    Granularity: "MONTHLY",
    Metrics: ["AMORTIZED_COST"],
    GroupBy: [{ Type: "DIMENSION", Key: "LINKED_ACCOUNT" }]
};