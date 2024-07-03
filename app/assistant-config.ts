export let assistantId = "asst_snaK26CHIKbRJhMEC8EVplzk"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
