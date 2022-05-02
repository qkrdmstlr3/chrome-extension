describe('Action test', () => {
  it('setBadgeText test', async () => {
    const looseScriptMock = mockForV3('action.setBadgeText');
    looseScriptMock.mockImplementation(async () => Promise.resolve());

    // dynamic import
    const action = await import('../action');
    await action.setBadgeText({ text: 'hello' });

    expect(looseScriptMock).toBeCalledTimes(1);
  });
});
