import neurom as nm
from neurom import viewer
nrn = nm.load_neuron('test.swc')
print nrn
fig, ax = viewer.draw(nrn)
fig.show()
