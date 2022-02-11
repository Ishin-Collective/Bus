local Bus = {}
Bus.__index = Bus

function Bus.new()
	return setmetatable({}, Bus)
end

function Bus:post(...)
	for i = 1, #self do
		coroutine.resume(coroutine.create(self[i]), ...)
	end
end

function Bus:listen(Function)
	self[#self + 1] = Function
end

function Bus:cancel(Function)
	local n = #self

	for i = 1, n do
		if Function == self[i] then
			self[i] = self[n]
			self[n] = nil
			break
		end
	end
end

return Bus