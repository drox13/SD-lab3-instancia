ramAvalible=$(grep -i memfree /proc/meminfo)
echo "$ramAvalible" > $PWD/dataLogs/logLastStatusRAM.log